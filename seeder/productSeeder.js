const mongoose = require("mongoose");
const Product = require("../models/product");
const config = require("../config/config");

mongoose.connect(config.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log("we are connected")})
    .catch(err => console.log(err));
/*
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
*/

const products = [
    new Product({
        productName: "Watch Dogs",
        productPrice: 29.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/d/d9/Watch_Dogs_box_art.jpg",
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
        productTrailerURL: "https://www.youtube.com/embed/DqoQG_XYF-8",
        productDescription: "Watch Dogs (stylized as WATCH_DOGS) is a 2014 action-adventure game developed by Ubisoft Montreal and published by Ubisoft. Set in a fictionalized version of Chicago, the plot follows hacker Aiden Pearce's search for revenge after the killing of his niece. The game is played from a third-person perspective, and the world is navigated on foot or by vehicle. An online multiplayer mode allows up to eight players to engage in cooperative and competitive gameplay."
    }),
    new Product({
        productName: "Dark Souls 2",
        productPrice: 39.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg",
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
        productTrailerURL: "https://www.youtube.com/embed/U6uyuIQYlfY",
        productDescription: "Dark Souls II[a] is an action role-playing game developed by FromSoftware and published by Bandai Namco Games. The third game in the Souls series, it was released for Microsoft Windows, PlayStation 3 and Xbox 360. Although both are set in the same universe, there is no direct story connection between the first Dark Souls and the sequel.[4] The game uses dedicated multiplayer servers.[4] Taking place in the kingdom of Drangleic, the game features both player versus environment (PvE) and player versus player (PvP) gameplay, in addition to having some co-op components. As in the earlier games in the series, it again features challenging gameplay, but with a more powerful graphics engine and more advanced artificial intelligence system."
    }),
    new Product({
        productName: "Ori and the Will of the Wisps",
        productPrice: 29.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/9/94/Ori_and_the_Will_of_the_Wisps.jpg",
        genres: [
            {
                _id: "5eaa26f9aa7a602c4c63d7e5",
                genre: "Statergy"
            },
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/2reK8k8nwBc",
        productDescription: "Ori and the Will of the Wisps is a platform-adventure Metroidvania video game developed by Moon Studios and published by Xbox Game Studios for Xbox One and Microsoft Windows. Announced during E3 2017, the title is a direct sequel to 2015's Ori and the Blind Forest, and was released on March 11, 2020. The game is a 4K UHD, Xbox One X Enhanced and Xbox Play Anywhere title.[1]The game was developed by Moon Studios, a collective organization without a set location. The game's visuals were given an overhaul from the two-dimensional artwork in Blind Forest, to the three-dimensional models played in multilayered backgrounds in Will of the Wisps. The game maintains narrative continuity with Blind Forest and introduces new melee combat."
    }),
    new Product({
        productName: "Ori and the Blind Forest",
        productPrice: 39.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg",
        genres: [
            {
                _id: "5eaa26f9aa7a602c4c63d7e5",
                genre: "Statergy"
            },
            {
                _id: '5eaa26f9aa7a602c4c63d7e4',
                genre: "Roleplay"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/cklw-Yu3moE",
        productDescription: `Ori and the Blind Forest is a platform-adventure Metroidvania video game developed by Moon Studios and published by Microsoft Studios. The game was released for Xbox One and Microsoft Windows on March 11, 2015 and for Nintendo Switch on September 27, 2019. Players assume control of Ori, a small white guardian spirit, and Sein, the "light and eyes" of the Forest's Spirit Tree. Players are tasked to move between platforms and solve puzzles. The game features a save system called "Soul Links", which allows players to save their progress at will with limited resources, and an upgrade system that gives players the ability to strengthen Ori's skills.`
    }),
    new Product({
        productName: "Red Dead Redemption 2",
        productPrice: 49.99,
        productImgURL: "https://vignette.wikia.nocookie.net/reddeadredemption/images/0/0a/Reddeadcover.jpg/revision/latest/scale-to-width-down/700?cb=20180503145113",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/eaW0tYpxyp0",
        productDescription: "Red Dead Redemption 2 (stylized as Red Dead Redemption II) is a western-themed action-adventure video game developed and published by Rockstar Games. It is the third entry in the Red Dead series and a prequel to 2010's Red Dead Redemption[3] and was released on October 26th, 2018[4] on PlayStation 4, Xbox One[5] and on November 5th, 2019 for PC. Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang's decline as they are pursued by lawmen, fellow gangs and Pinkerton agents. The narrative revolves around the characters of Dutch van der Linde, John Marston and Micah Bell in addition to Morgan."
    }),
    new Product({
        productName: "GTA: San Andreas",
        productPrice: 14.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/u_CbHrBbHNQ",
        productDescription: `Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh title in the Grand Theft Auto series, and the followup to the 2002 game Grand Theft Auto: Vice City. It was released in October 2004 for PlayStation 2, and in June 2005 for both Microsoft Windows and Xbox. The game, set within an open world environment that players can explore and interact with at their leisure, focuses on the story of former gangster Carl "CJ" Johnson, who is brought back home by the death of his mother, only to become involved in a long journey that sees him exploring the fictional U.S. state of San Andreas, which is heavily based on California and Nevada.[b]`
    }),
    new Product({
        productName: "Grand Theft Auto: Vice City",
        productPrice: 4.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/c/ce/Vice-city-cover.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/f_VBXRZuHTc",
        productDescription: "Grand Theft Auto: Vice City is a 2002 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first entry in the Grand Theft Auto series since 2001's Grand Theft Auto III. Set in 1986 within the fictional Vice City, based on Miami, the game follows mobster Tommy Vercetti following his release from prison. After he is caught up in an ambushed drug deal, he seeks out those responsible while building a criminal empire and seizing power from other criminal organisations in the city. The game is played from a third-person perspective, and its world is navigated on foot or by vehicle. The open world design lets the player freely roam Vice City, consisting of two main islands. The game's plot is based on multiple real-world people and events in Miami such as Cubans, Haitians, and biker gangs, the 1980s crack epidemic, the Mafioso drug lords of Miami, and the dominance of glam metal. The game was also influenced by the film and television of the era, including Scarface and Miami Vice. Much of the development work constituted creating the game world to fit the inspiration and time period; the development team conducted extensive field research in Miami while creating the world. The game was released in October 2002 for the PlayStation 2, in May 2003 for Microsoft Windows, and in October 2003 for the Xbox."
    }),
    new Product({
        productName: "Tom Clancy's Rainbow Six Siege",
        productPrice: 19.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/KlbLLRdg9u8",
        productDescription: `Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on December 1, 2015. It was also set to be released for PlayStation 5 and Xbox Series X. The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of an objective within a room. The title has no campaign but features a series of short, offline missions called, "situations" that can be played solo. These missions have a loose narrative, focusing on recruits going through training to prepare them for future encounters with the "White Masks", a terrorist group that threatens the safety of the world.`
    }),
    new Product({
        productName: "Battlefield V",
        productPrice: 39.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/f/f0/Battlefield_V_standard_edition_box_art.jpg",
        genres: [
            {
                _id: '5eaa26f9aa7a602c4c63d7e2',
                genre: "Action"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/fb1MR85XFOc",
        productDescription: "Battlefield V is a first-person shooter video game developed by EA DICE and published by Electronic Arts. Battlefield V is the sixteenth installment in the Battlefield series. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on November 20, 2018. Those who pre-ordered the Deluxe Edition of the game were granted early access to the game on November 15, 2018,[2] and Origin Access Premium subscribers on PC received access to the game on November 9, 2018.[3] The game is based on World War II and is a thematic continuation of its World War I based precursor Battlefield 1."
    }),
    new Product({
        productName: "Fatal Frame II: Crimson Butterfly",
        productPrice: 29.99,
        productImgURL: "https://upload.wikimedia.org/wikipedia/en/a/af/Fatal_Frame_II_-_Crimson_Butterfly.jpg",
        genres: [
            {
                _id: '5ebf95241279e018d4acd423',
                genre: "Horror"
            }
        ],
        productTrailerURL: "https://www.youtube.com/embed/9czbIFtje3o",
        productDescription: "Fatal Frame II: Crimson Butterfly,[a] is a Japanese survival horror video game developed and published by Tecmo in 2003 for the PlayStation 2. It is the second installment in the Fatal Frame series, and features an independent story with little relation to the first title. The story follows twin sisters Mio and Mayu Amakura as they explore an abandoned village and experience encounters with the paranormal. Their lives quickly become threatened when the village spirits begin to possess Mayu and target them as sacrifices for an ancient ritual. Players must use a camera with powers of exorcism to defeat enemies and uncover the secrets of the village."
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

