import { async } from 'regenerator-runtime';
import { Selector } from 'testcafe';

//Outline of what we need
//Test Case Login Page
//Test Case Sign Up Page
//Test Case Forgot Password Page
//Test Case Forgot Username Page

fixture `bp-osble`
.page `http://localhost:8081`;

//This test performs a simple check to see if we are on the
//login page
test('TestFeedPage', async t => {

    const passwordInput = Selector('input').withAttribute('class', 'form-control enterPassword', 'type', 'password', 'placeholder', 'Password');

    await t
        .typeText('#emailInput', 'hermes_esono@hotmail.es')
        .typeText(passwordInput, 'MongoDB240')
        .click('#login-btn-icon')
        .expect(Selector('#feedPage').visible).eql(true)
        .typeText('#FeedPostBox', 'Hey Osble Team. Are you testing me?')
        .click('#FeedPostButton')
        .expect(Selector('#postItem').innerText).eql("Hey Osble Team. Are you testing me?")
        .click('#FeedReplyButton1')
        .typeText('#FeedReplyBox', 'I am glad to see you testing me')
        .click('#FeedReplyButton')
        .expect(Selector('#replyItem').innerText).eql("I am glad to see you testing me")
        .click('#FeedHide-Show-Reply')
        .expect(Selector('#replyItem').visible).eql(false)
        .click('#FeedHide-Show-Reply')
        .expect(Selector('#replyItem').visible).eql(true)
        
        
});