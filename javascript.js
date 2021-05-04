var contactsButton = document.getElementsByClassName('contacts list button')[0];
contactsButton.addEventListener("click", onContactsList);

var contacts = [
    { link: 'https://twitter.com/elonmusk', name: 'Twitter', src: './img/twitter_logo.png' },
    { link: 'https://www.instagram.com/elonmusk/?hl=en', name: 'Instagram', src: './img/instagram_logo.png' },
    { link: 'https://www.facebook.com/Elon-Musk-19958149870/', name: 'Facebook', src: './img/facebook_logo.png' },
    { link: 'https://www.facebook.com/Elon-Musk-19958149870/', name: 'Tesla website', src: './img/tesla_logo.png' }
];
var contactsList = document.createElement("ul");
contactsList.style = "list-style: none; position: absolute;";
contactsList.className = 'contacts list';
contactsList.hidden = true;

for (let i = 0; i < contacts.length; i++)
{
    let contact = document.createElement("li");

    let logo = document.createElement("img");
    logo.src = contacts[i].src;
    logo.width = logo.height = 25;

    let contactRef = document.createElement("a");
    contactRef.href = contacts[i].link;
    contactRef.appendChild(logo);
    var span = document.createElement("p")
    span.innerText = contacts[i].name;
    contactRef.appendChild(span);

    contact.appendChild(contactRef);
    contactsList.appendChild(contact);
}

function onContactsList()
{
    if (contactsList.hidden)
    {
        contactsButton.after(contactsList);
        contactsList.hidden = false;
    }
    else
    {
        contactsList.hidden = true;
    }
}