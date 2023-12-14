# Testing

## Overview

We are using Jest, a JavaScript testing framework, for testing our JavaScript code. To run the tests, run `npm test` from the root directory. In addition, `npm test` has been included in one of our Github workflows; the tests run every time a pull request is opened against the main branch. The test files can be found in the `lib/__tests__` directory.

## Standards

Here is a list of standards that we try to adhere to when creating tests:

1. Tests should be deterministic. Running a test multiple times should produce the same result.
2. Use the Jest function `describe` to group the tests for a method together.
3. Test names should state what the purpose of the related test is for.
4. Tests should not interfere with the actual code or other tests. Mocking variables and functions is one way of achieving this.
5. Use the test setup and teardown methods that Jest has to reduce the amount of repeated code between tests.

## Manual Testing

1. Remix the project on Glitch.
2. Set the environment variable in .env file.
3. Enter your domain in the browser, you can see your public homepage and add /private at the end you can see your private homepage.
4. The first step is to create your account, enter your username, password and domain.
5. You should see your username, user domain, latest posts, avatar in the public homepage.
6. In your private homepage, you can see the side bars have the latest posts, notifications, messages, compose button, my posts, preferences, and some open bugs and issues. Below you can find a person in the fediverse by enter the domain. 
7. We can change our preferences by using prefs button. For example, we can modify the interface strings of the post button, change some image buttons and the account profile. We can change our username, bios and avatar and see the change in our public homepage. We can also see our followers and following if we are followed or following someone else.
8. We then can test our compose functionality by clicking on compose button on the side bar. We can send something in the box and choose whether this post can be reply, boost or liked via the checkbox below. Click on post then we and our followers will see the post in the latest post page. We can also see the post in my post page. We can edit our post, reply, boost, like our/others' posts too.
9. We can follow someone by searching them in the search box and the user will appear in your private homepage. We can send message to others and view the messages in the messages page. In additon, we can get notifications when someone sends you a message, interact with your posts or follow you.
10. You can login after you create the account using username and password.
