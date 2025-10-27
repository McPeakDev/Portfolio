# Github Portfolio Template

This is a Vue project using typescript. This provides an easy portfolio for those with github accounts.

This will pull all public projects and public information and display in a deployable site.

This will require some information to be placed in a `config.json` file that will be placed in the `public` folder of the project. A sample one has been provided for you.

#### Available parameters currently are the following

- github_username - Required
- linked_in_url - Optional
- extended_bio - Optional
- email - Optional
- phone_number - Optional

Here is a fully fleshed out config.json

```json
{
  "github_username": "someone",
  "linked_in_url": "https://www.linkedin.com/in/someone/",
  "extended_bio": "Lorem Ipsum",
  "email": "some.email@email.com",
  "phone_number": "123-456-7890"
}
```
