// Array of quotes to display (with quote and author as a single string)
var quotes = [
    // Jordan Peterson
    ["\"Compare yourself to who you were yesterday, not to who someone else is today.\"<br><strong>- Jordan Peterson</strong>"],
    ["\"You’re going to pay a price for every bloody thing you do and everything you don’t do. You don’t get to choose to not pay a price, you only get to choose which poison you’re going to take.\"<br><strong>- Jordan Peterson</strong>"],
    ["\"Set your house in perfect order before you criticize the world.\"<br><strong>- Jordan Peterson</strong>"],
    ["\"The purpose of life is finding the largest burden that you can bear and bearing it.\"<br><strong>- Jordan Peterson</strong>"],

    // Joe Rogan
    ["\"Greatness and madness are next-door neighbors, and they often borrow each other’s sugar.\"<br><strong>- Joe Rogan</strong>"],
    ["\"Be the hero of your own story.\"<br><strong>- Joe Rogan</strong>"],
    ["\"The key to happiness doesn’t lay in numbers in a bank account, but in the way we make others feel about themselves.\"<br><strong>- Joe Rogan</strong>"],
    ["\"One of the most fascinating lessons I’ve absorbed about life is that the struggle is good.\"<br><strong>- Joe Rogan</strong>"],

    // Jocko Willink
    ["\"Discipline equals freedom.\"<br><strong>- Jocko Willink</strong>"],
    ["\"There’s no shortcut. There’s no hack. There’s only one way: So get after it.\"<br><strong>- Jocko Willink</strong>"],
    ["\"Get up early, work hard, stay focused, and surround yourself with good people.\"<br><strong>- Jocko Willink</strong>"],
    ["\"When individual members of the team do well, the team does well.\"<br><strong>- Jocko Willink</strong>"],

    // David Goggins
    ["\"Most people who are criticizing and judging haven't even tried what you're attempting to do.\"<br><strong>- David Goggins</strong>"],
    ["\"You have to build calluses on your brain just like how you build calluses on your hands. Callus your mind through pain and suffering.\"<br><strong>- David Goggins</strong>"],
    ["\"The only way you're ever going to get to the other side of this journey is if you suffer. To grow, you must suffer.\"<br><strong>- David Goggins</strong>"],
    ["\"You will never learn from people if you always tap dance around the truth.\"<br><strong>- David Goggins</strong>"],

    // Tim Ferriss
    ["\"Focus on being productive instead of busy.\"<br><strong>- Tim Ferriss</strong>"],
    ["\"What we fear doing most is usually what we most need to do.\"<br><strong>- Tim Ferriss</strong>"],
    ["\"The superheroes you have in your mind (idols, icons, titans, billionaires, etc.) are nearly all walking flaws who’ve maximized 1 or 2 strengths.\"<br><strong>- Tim Ferriss</strong>"],
    ["\"Conditions are never perfect. ‘Someday’ is a disease that will take your dreams to the grave with you.\"<br><strong>- Tim Ferriss</strong>"],

    // Ryan Holiday
    ["\"The obstacle is the way.\"<br><strong>- Ryan Holiday</strong>"],
    ["\"You control how you respond to life.\"<br><strong>- Ryan Holiday</strong>"],
    ["\"The more you try to control things, the less control you have.\"<br><strong>- Ryan Holiday</strong>"],
    ["\"The only way to do great things is to accept that everything starts with little things.\"<br><strong>- Ryan Holiday</strong>"],

    // Mark Manson
    ["\"The desire for more positive experience is itself a negative experience. And, paradoxically, the acceptance of one’s negative experience is itself a positive experience.\"<br><strong>- Mark Manson</strong>"],
    ["\"Don’t hope for a life without problems. There’s no such thing. Instead, hope for a life full of good problems.\"<br><strong>- Mark Manson</strong>"],
    ["\"The more something threatens your identity, the more you will avoid it.\"<br><strong>- Mark Manson</strong>"],
    ["\"Who you are is defined by what you’re willing to struggle for.\"<br><strong>- Mark Manson</strong>"],

    // Tim Dillon
    ["\"If you can’t laugh at yourself, then you probably won’t enjoy me.\"<br><strong>- Tim Dillon</strong>"],
    ["\"I believe in God, but my God is dark and complicated, and we don’t speak a lot.\"<br><strong>- Tim Dillon</strong>"],
    
    // Theo Von
    ["\"Sometimes I don’t even know where I’m going, I just know I’m not gonna stay where I’m at.\"<br><strong>- Theo Von</strong>"],
    ["\"I look like the type of guy who has a lot of excuses.\"<br><strong>- Theo Von</strong>"],

    // Tucker Carlson
    ["\"There’s nothing more terrifying than being on the wrong side of history.\"<br><strong>- Tucker Carlson</strong>"],
    ["\"If you want to change what people think, you first have to change what they say.\"<br><strong>- Tucker Carlson</strong>"],

    // Mitch Hedberg
    ["\"I used to do drugs. I still do, but I used to, too.\"<br><strong>- Mitch Hedberg</strong>"],
    ["\"I'm against picketing, but I don't know how to show it.\"<br><strong>- Mitch Hedberg</strong>"],
    ["\"Rice is great if you're really hungry and want to eat two thousand of something.\"<br><strong>- Mitch Hedberg</strong>"],

    // Robin Williams
    ["\"No matter what people tell you, words and ideas can change the world.\"<br><strong>- Robin Williams</strong>"],
    ["\"I think the saddest people always try their hardest to make people happy. Because they know what it feels like to feel absolutely worthless and they don’t want anybody else to feel like that.\"<br><strong>- Robin Williams</strong>"],
    ["\"You’re only given a little spark of madness. You mustn’t lose it.\"<br><strong>- Robin Williams</strong>"]
];

// Select new random quote for widget
function newQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quotes").innerHTML = quotes[randomNum];
}

// Initial quote display
newQuote();