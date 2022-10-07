# Sample Node.js Mailchimp api
This repo serves as a base source of truth for building out a simple node.js api for mailchimp integration

## Hosting
Recommedation: [Glitch](https://www.glitch.me)

## .env
```shell
API_KEY=xxxxxx-yyy
DC=yyy
LIST_ID=zzzzz
```

## Sample body payload
```json
{
  "email_address": "email",
  "merge_fields": {
    "FNAME": "fname",
    "LNAME": "lname",
    "PHONE": "tel"
  }
}
```
https://mailchimp.com/developer/marketing/docs/merge-fields/
