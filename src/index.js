const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Max Diaz",
  nickname: "maxter",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "platzi",
      url: "https://platzi.com/",
      username: "",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/",
      username: "",
    },
    {
      name: "github",
      url: "https://github.com/",
      username: "",
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      username: "",
    },
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/",
      username: "",
    },
    {
      name: "twitch",
      url: "https://twitch.tv/",
      username: "",
    },
    {
      name: "discord",
      url: "https://discord.gg/",
      username: "",
    },
  ],
  links: [
    {
      name: "mentorías",
      url: "https://example.com/",
      color: "fuchsia",
      emoji: "💻",
    },
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
    {
      name: "cursos",
      url: "https://example.com/",
      color: "lime",
      emoji: "🎒",
    },
    {
      name: "sponsors",
      url: "https://example.com/",
      color: "rose",
      emoji: "🚀",
    },
  ],
  footer: "Made with Love on Perú",
};

const main = () => {
  let name = document.createTextNode(data.name);
  let links = data.links
    .map((link) => {
      return `
    <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
      <a
        class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
        href=${link.url}
        target="_blank"
      >
        ${link.name}
      </a>
      <span>${link.emoji}</span>
    </div>`;
    })
    .join("");
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
};

main();
