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

### Creating an account

### Logging into an account

### Logging out of an account

### Home page

1. After creating an account/logging in, you should be redirected to the home page. On the left hand side, there should be different sections: `Latest`, `Notifications`, `Messages`, `Compose`, `My Posts`, `Prefs`, and `Bugs & Issues`. The default section that is selected should be `Latest`.
![Screenshot 2023-12-14 at 8 08 53 PM](https://github.com/CSE-210-Team-6/shuttlecraft/assets/52771821/f4461699-e8f0-46a2-91fc-880d6eb2c7be)

### Following a person

1. On the left hand side, there is an input box underneath `find a person`. Search for the person you would like to follow by entering their `username@domain`.

   ![Screenshot 2023-12-14 at 8 10 09 PM](https://github.com/CSE-210-Team-6/shuttlecraft/assets/52771821/4f22e2d1-9441-410d-9897-4d63b2b3404a)
2. Click the `Enter` key on your keyboard to execute the search.
3. If the person you are searching for exists, they will show up in the list of results. Click on the person that you would like to follow from the results.
4. Click on the green `Follow` button on the person's profile.
5. Refresh the page.
6. You should see the person you just followed on the left hand side.

### Unfollowing a person

1. On the left hand side, click on the person that you would like to unfollow.
2. Click on the green `Unfollow` button on the person's profile.
3. Refresh the page.
4. You should no longer see the person you unfollowed on the left hand side.

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
