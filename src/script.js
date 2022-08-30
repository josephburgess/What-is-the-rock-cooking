const rockMessages = [
    "What's the key to success? The key is, there is no key. Be humble, hungry, and the hardest worker in any room.", 
    "With drive and a bit of talent you can move mountains",
    "If something stands between you and your success, MOVE IT! Never be denied",
    "The wall! Your success is on the other side. Can’t jump over it or go around it. You know what to do.",
    "There is no substitute for hard work. Always be humble and hungry.",
    "The men I idolized built their bodies and became somebody – like Sylvester Stallone and Arnold Schwarzenegger – and I thought, ‘That can be me.’ So I started working out. The funny thing is I didn’t realize back then that I was having a defining moment.",
    "Think back five years ago. Think of where you’re at today. Think ahead five years and what you want to accomplish. Be unstoppable.",
    "The single most powerful thing I can be is to be myself.",
    "Blood, sweat and respect. First two you give, last one you earn."
];

const newQuote = () => {
	var randomNumber = Math.floor(Math.random() * (rockMessages.length));
    document.getElementById('qouteDisplay').innerHTML = rockMessages[randomNumber];
}
window.onload = newQuote()