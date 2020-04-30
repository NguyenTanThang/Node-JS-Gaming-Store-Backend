const mongoose = require("mongoose");
const Product = require("../models/product");
const config = require("../config/config");

mongoose.connect(config.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log("we are connected")})
    .catch(err => console.log(err));

const products = [
    new Product({
        productName: "Fifa 20",
        productPrice: 49.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/2/21/FIFA_20_Standard_Edition_Cover.jpg",
        genres: [
            {
                _id: "5eaa26f9aa7a602c4c63d7e3",
                genre: "Sport"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/vgQNOIhRsV4",
        productDescription: "FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series.[2] It is the 27th installment in the FIFA series, and was released on 27 September 2019 for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch.[3]        Real Madrid winger Eden Hazard was named the new cover star of the Regular Edition, with Liverpool defender Virgil van Dijk on the cover of the Champions Edition.[4] Former Juventus and Real Madrid midfielder Zinedine Zidane was later named as the cover star for the Ultimate Edition.[5]                The game features VOLTA Football for the first time, a new mode that provides a variance on the traditional 11v11 gameplay and focuses on small-sided street and futsal games.[6] The mode is believed to be focused on the former FIFA Street series.[7]"
    }),
    new Product({
        productName: "Dark Souls",
        productPrice: 39.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            },
            {
                _id: "5eaa26f9aa7a602c4c63d7e5",
                genre: "Statergy"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/o1780AqAa20",
        productDescription: "Dark Souls[b] is a 2011 action role-playing game developed by FromSoftware and published by Namco Bandai Games. A spiritual successor to FromSoftware's Demon's Souls, the game is the second instalment in the Souls series. Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind. A port for Microsoft Windows was released in August 2012, which featured additional content not seen in the original PlayStation 3 and Xbox 360 versions. In October 2012, the new content was made downloadable for consoles, under the subtitle Artorias of the Abyss.        Dark Souls received critical acclaim, with many citing it as one of the greatest video games of all time. Critics praising the depth of its combat, intricate level design, and use of flavor text. However, the game's difficulty received mixed reviews, with some criticizing it for being too unforgiving. The original Windows version of the game was less well-received, with criticism directed at numerous technical issues. By April 2013, the game had sold over two million copies worldwide. The game saw two sequels released in the mid-2010s, while a remastered version, Dark Souls: Remastered, was released in 2018."
    }),
    new Product({
        productName: "Assassin's Creed Unity",
        productPrice: 29.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/a/ac/Acunity.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            },
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/xzCEdSKMkdU",
        productDescription: "Assassin's Creed Unity is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft. It was released in November 2014 for Microsoft Windows, PlayStation 4 and Xbox One. It is the eighth major installment in the Assassin's Creed series, and the successor to 2013's Assassin's Creed IV: Black Flag. It also has ties to Assassin's Creed Rogue which was released for the previous generation consoles, the PlayStation 3 and Xbox 360 on the same date.        The plot is set in a fictional history of real world events and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The story is set in Paris during the French Revolution; the single-player story follows Arno Victor Dorian in his efforts to expose the true powers behind the Revolution. The game retains the series' third-person open world exploration as well as introducing a revamped combat, parkour and stealth system. The game also introduces cooperative multiplayer to the Assassin's Creed series, letting up to four players engage in narrative-driven missions and explore the open world map."
    }),
    new Product({
        productName: "Sekiro: Shadows Die Twice",
        productPrice: 59.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            },
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/rXMX4YJ7Lks",
        productDescription: "Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision. The game takes place in the Sengoku period in Japan, and follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord. It was released for Microsoft Windows, PlayStation 4, and Xbox One on 22 March 2019.        Gameplay is focused on stealth, exploration, and combat, with a particular emphasis on boss battles. Although most of the game takes place in fictional areas, some areas are inspired by real-world buildings and locations in Japan. The game also makes strong references to Buddhist mythology and philosophy. While creating the game, director Hidetaka Miyazaki wanted to create a new intellectual property (IP) that marked a departure from the Souls series of games also made by FromSoftware, and looked to series such as The Mysterious Murasame Castle and Tenchu for inspiration. Sekiro received universal acclaim from critics, who commonly compared and contrasted it to the Souls games. While its high level of difficulty received some criticism, praise was directed toward its gameplay and setting. By August 2019, the game had shipped 3.8 million copies worldwide. It was also nominated for and won several awards and accolades, including game of the year."
    }),
    new Product({
        productName: "Half-Life Opposing Force",
        productPrice: 5.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/a/a9/Half-Life_Opposing_Force_box.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/ZNZsWm-Ulk4",
        productDescription: "Half-Life: Opposing Force is an expansion pack for Valve's science fiction first-person shooter video game Half-Life. The game was developed by Gearbox Software and Valve and published by Sierra On-Line on November 19, 1999. Opposing Force is the first expansion for Half-Life and was announced in April 1999. Randy Pitchford, the lead designer on the game, later noted that he believed Gearbox was selected to develop Opposing Force because Valve wanted to concentrate on their future projects. Over the course of development, Gearbox brought in a variety of outside talent from other areas of the video games industry to help bolster various aspects of design."
    }),
    new Product({
        productName: "Half-Life Blue Shift",
        productPrice: 5.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Half-Life_Blue_Shift_box.jpg/220px-Half-Life_Blue_Shift_box.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/qinSOOjFK2c",
        productDescription: "Half-Life: Blue Shift is an expansion pack for Valve's science fiction first-person shooter video game Half-Life. The game was developed by Gearbox Software with Valve and published by Sierra On-Line on June 12, 2001. Blue Shift is the second expansion for Half-Life, originally intended as part of a Dreamcast version of the original game. Although the Dreamcast port was later cancelled, the PC version continued development and was released as a standalone product. The game was released on Steam on August 24, 2005."
    }),
    new Product({
        productName: "Megaman X7",
        productPrice: 3.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Mmx7box.jpg/220px-Mmx7box.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/SkYPnueSVtw",
        productDescription: "Mega Man X7, known as Rockman X7 (ロックマンX7) in Japan, is a video game developed by Capcom for the PlayStation 2 console. It is the seventh main game in the Mega Man X series and the first in the series to appear on the sixth generation of gaming consoles. Mega Man X7 was first released in Japan on July 17, 2003, with North American and European releases following in October 2003 and March 2004 respectively. It was also released for Microsoft Windows exclusively in South Korea until the re-release as part of Mega Man X Legacy Collection 2 (Rockman X Anniversary Collection 2 in Japan) in July 24 2018 for the worldwide release and July 26, 2018 for Japan,[4][5] whose Windows version was released internationally via Steam along with PlayStation 4, Xbox One and Nintendo Switch. It is the first Mega Man X in the series to feature bilingual audio. The next game in the series, Mega Man X8, also features bilingual audio. It is the first and only Mega Man X game to be a third-person shooter (in fact the third Mega Man game to use third-person view due to the Mega Man Legends franchise)."
    }),
    new Product({
        productName: "Assassin's Creed 2",
        productPrice: 4.99,
        productImgURL: "https://images.g2a.com/newlayout/323x433/1x1x0/d6694af00283/591200b95bafe3fb3319a23b",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            },
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/_xkCPNECud8",
        productDescription: "Assassin's Creed II is a 2009 action-adventure video game developed by Ubisoft Montreal and published by Ubisoft.[1] It is the second major installment in the Assassin's Creed series, a sequel to 2007's Assassin's Creed. The game was first released on the PlayStation 3 and Xbox 360 in November 2009, and was later made available on Microsoft Windows in March 2010 and OS X in October 2010. Several minor game related features could be redeemed on Uplay and three downloadable expansion packs were released on Xbox Live."
    }),
    new Product({
        productName: "Assassin's Creed 3",
        productPrice: 6.99,
        productImgURL: "https://media.gamestop.com/i/gamestop/10099633/Assassins-Creed-IIIg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            },
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/-pUhraVG7Ow",
        productDescription: "Assassin's Creed III is a 2012 action-adventure video game developed by Ubisoft Montreal and published by Ubisoft for PlayStation 3, Xbox 360, Wii U, and Microsoft Windows. It is the fifth major installment in the Assassin's Creed series, and a direct sequel to 2011's Assassin's Creed: Revelations. The game was released worldwide for PlayStation 3 and Xbox 360, beginning in North America on October 30, 2012, with a Wii U and Microsoft Windows release in November 2012."
    }),
    new Product({
        productName: "Assassin's Creed: Conspiracies",
        productPrice: 39.99,
        productImgURL: "https://vignette.wikia.nocookie.net/assassinscreed/images/5/56/Assassin%27s_Creed_Conspirations_Cover.jpg/revision/latest/scale-to-width-down/658?cb=20191030150420",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            },
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/sD9vXURgnZ0",
        productDescription: "Assassin's Creed: Conspiracies (French: Assassin's Creed: Conspirations), also known as Assassin's Creed - Cycle 2, is a two-part story published in French by Les Deux Royaumes. Following the end of the first cycle by Corbeyran and Defali, this new story is written by Guillaume Dorison and illustrated by Jean-Baptiste Hostache. The first of the two volumes saw a release in October 2016."
    })
]

let counter = 0;
products.forEach(product => {
    product.save()
    .then((createdProduct) => {
        counter++;
        console.log(counter);
        if (counter == products.length){
            mongoose.disconnect();
        }
    }).catch(err => console.log(err));
});

module.exports = () => {
    console.log("Commit");
}

