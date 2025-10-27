# Github Portfolio Template

This is a Vue project using typescript. This provides an easy portfolio for those with github accounts.

This will pull all public projects and public information and display in a deployable site.

This will require some information to be placed in a `config.json` file that will be placed in the `public` folder of the project. A sample one has been provided for you.

#### Available parameters currently are the following

- github_username - Required
- linked_in_url - Required
- extended_bio - Optional
- email - Optional
- phone_number - Optional

Here is a fully fleshed out config.json

```json
{
  "githubUsername": "someone",
  "linkedInURL": "https://www.linkedin.com/in/someone/",
  "extendedBio": "Lorem Ipsum",
  "email": "some.email@email.com",
  "phoneNumber": "123-456-7890"
}
```
