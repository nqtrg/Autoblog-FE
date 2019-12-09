import json
import logging
import requests
from datetime import datetime


def retrieving_posts():
    ret = {
        "Posts": []
    }
    medium_url = 'https://medium.com/@ntruong'
    api = medium_url + '/latest?format=json'
    res = requests.get(api)
    if not res:
        raise Exception(
            '''[E0001] An error occured when crawling data by page''')

    content = json.loads(res.text.split("])}while(1);</x>")[1])
    posts = content['payload']['references']['Post']

    for idx, post in enumerate(posts):
        post = posts[post]
        title = post["title"]
        description = post["content"]["subtitle"]
        url = medium_url + "/" + post["uniqueSlug"]

        previewImage = post["virtuals"]["previewImage"]
        if previewImage["imageId"]:
            image_url = "https://miro.medium.com/fit/c/%s/%s/%s" % (
                previewImage["originalWidth"],
                previewImage["originalHeight"],
                previewImage["imageId"])
        else:
            image_url = "/static/img/personal-website-logo.webp"

        try:
            time_stamp = datetime.fromtimestamp(int(post["createdAt"] / 1000))

        except Exception as e:
            time_stamp = ""
            logging.error(f"[E0006] {e}")

        try:
            ret['"Posts"'].append(
                {
                    'title': title,
                    'description': description,
                    'url': url,
                    'image_url': image_url,
                    'time_stamp': time_stamp
                }
            )
        except Exception as e:
            logging.error(f"[E0004] {e}")
    return {
        'statusCode': 200,
        'body': json.dumps(ret)
    }

if __name__ == "__main__":
    print(retrieving_posts())