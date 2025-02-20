const apologies = [
    "From the depths of my heart, I'm truly sorry for hurting you.",
    "I Love you ❤ My Love ❤, My Baby🐥, My Little Sweetheart, My Everything, I love you so much that I can't even express it.",
    "My words were thoughtless, and I deeply regret hurting the one I care for most.",
    "I understand that what I did was wrong, and I take full responsibility for my mistakes.",
    "Our relationship means the world to me, and I'm committed to rebuilding your trust.",
    "I promise to never repeat anything like this.",
    "Your feelings are precious to me, and I'm here to listen and make amends.",
    "I hope you can find it in your heart to forgive me for my foolish behavior.",
    "I never lied to you before this and I promise you that this was my first and last mistake.",
    "I assure you, with all my heart, that I will never lie to you ever again.",
    "Iss baar mere karan tumhe taklif hui, and I regret this."
];

const apologiesContainer = document.getElementById('apologies');

apologies.forEach(apology => {
    const apologyElement = document.createElement('p');
    apologyElement.classList.add('apology');
    apologyElement.textContent = apology;
    apologiesContainer.appendChild(apologyElement);
});
