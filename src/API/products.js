//These are the data about all funko Pops  that we´ll show on the screen

const funkoData = {
  count: 64,

  ///-----------------------DISNEY´S PRINCESS---------------------\\\
  princess: [
    //_________Aurora´s Info__________\\
    {
      id: 0,
      img: "https://realpopmania.com/cdn/shop/products/26_cf364df0-48ef-4ba6-9879-bb0e08b5260e.png?v=1674814653",
      title: "sleepin beauty",
      character: "Aurora",
      description:
        "princess Aurora, who was cursed by the evil fairy Maleficent to die from a prick on a spindle of the spinning wheel, but was saved by the three good fairies.",
      value: 10000,
      currency: "₡",
      height: 10,
      weight: 110,
    },
    //
    //
    //_________Snow white´s Info__________\\
    {
      id: 1,
      img: "https://realpopmania.com/cdn/shop/products/2_0c9d78a9-cfaa-4f5b-b8d3-c3857f8e7ea5_700x.png?v=1668006238",
      title: "Snow White and the Seven Dwarfs",
      character: "Snow white",
      description:
        "Snow White is a kind and gentle princess, with lips red as a rose and skin white as snow. After she's forced to leave her castle, she befriends the lovable Seven Dwarfs and finds her one true love",
      value: 10950,
      currency: "₡",
      height: 10,
      weight: 105,
    },
    //
    //
    //_________The Little Mermaid__________\\
    {
      id: 2,
      img: "https://realpopmania.com/cdn/shop/products/little-mermaid-ariel-bag-funko-pop-vinyl-figure-popcultcha_1.1562543780_1000x.png?v=1679149240",
      title: "The Little Mermaid",
      character: "Ariel",
      description:
        " a young mermaid named Ariel, who is captivated by the world upon the surface. When she falls in love with a human prince, she makes a deal with a villainous sea witch to become human, herself, and must earn his love before the agreed time runs out.",
      value: 9950,
      currency: "₡",
      height: 12,
      weight: 115,
    },
    //
    //
    //_________Mulan´s Info__________\\
    {
      id: 3,
      img: "https://realpopmania.com/cdn/shop/products/mulan-khan-funko-pop-rides-vinyl-figure-popcultcha_1.1574301605_1000x.png?v=1668017022",
      title: "Mulan",
      character: "Mulan with Khan",
      description:
        "Mulan is a responsible young woman, seen as a fearless warrior, leader, and beloved role model among her people, both men, and women.",
      value: 11950,
      currency: "₡",
      height: 10,
      weight: 107,
    },
    //
    //
    //_________Merida´s Info__________\\
    {
      id: 4,
      img: "https://realpopmania.com/cdn/shop/products/21_700x.png?v=1667999517",
      title: "Brave",
      character: "Merida",
      description:
        "Merida exemplifies what it means to be a Disney Princess through being brave, passionate and confident and she remains the same strong and determined Merida from the movie whose inner qualities have inspired moms and daughters around the world.",
      value: 10900,
      currency: "₡",
      height: 11,
      weight: 112,
    },
    //
    //
    //_________Jasmine´s Info__________\\
    {
      id: 5,
      img: "https://realpopmania.com/cdn/shop/products/3_6a3aef30-fe54-4711-9864-70af510a94db_700x.png?v=1668004479",
      title: "Aladdin",
      character: "Jasmine",
      description:
        "asmine is incredibly independent and strong. She isn't afraid to speak her mind, no matter who she's up against, and won't hesitate to stand up for what's right. She is extremely compassionate and caring towards her kingdom, her family, and her friends.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //
    //_________Rapunzel´s Info__________\\
    {
      id: 6,
      img: "https://realpopmania.com/cdn/shop/products/1_2a063d6b-616f-4d1d-978e-d125425248df_700x.png?v=1668004326",
      title: "Tangled",
      character: "Rapunzel",
      description:
        "Rapunzel is a spirited and determined young woman, with a strong sense of curiosity about the world, and a willingness to step outside of her comfort zone to experience her dream.",
      value: 9900,
      currency: "₡",
      height: 10.5,
      weight: 125,
    },
    //
    //
    //_________Cinderella´s Info__________\\
    {
      id: 7,
      img: "https://realpopmania.com/cdn/shop/products/22_5e3992da-c4d2-4aa9-bfa0-a057aa076d77_700x.png?v=1674814650",
      title: "Cinderella",
      character: "Cinderella",
      description:
        "Cinderella is a young woman with medium-length strawberry-blonde hair, blue eyes, and fair complexion. After her father dies, she is forced into servitude in her own home and is tormented by her evil stepmother, Lady Tremaine, and two stepsisters, Anastasia and Drizella.",
      value: 10900,
      currency: "₡",
      height: 13,
      weight: 110,
    },
    //
    //
    //_________Tiana´s Info__________\\
    {
      id: 8,
      img: "https://realpopmania.com/cdn/shop/products/18_7809dc7f-c062-4373-9914-8abf56babe43_700x.png?v=1674814643",
      title: "The Princess and the Frog",
      character: "Tiana",
      description:
        "Tiana is an intelligent, resourceful, and highly talented young woman. However, at the start of the film, and mostly throughout, she can be overly uptight and far too absorbed in work ethics to focus on relaxing, family, and friends.",
      value: 11900,
      currency: "₡",
      height: 13,
      weight: 110,
    },
    //
    //
    //_________Belle´s Info__________\\
    {
      id: 9,
      img: "https://realpopmania.com/cdn/shop/products/27_cf8e4cbf-ddf9-4e39-8dfa-19f4ec611473_634x.png?v=1668003195",
      title: "Beauty and the Beast",
      character: "Belle",
      description:
        "She is confident and comfortable being herself and knows that it's not fair to judge a book—or a beast—by its cover. She yearns to escape the simplicity of her life and find adventure beyond her provincial town.",
      value: 10950,
      currency: "₡",
      height: 13.5,
      weight: 120,
    },
    //
    //
    //_________Pocahontas Info__________\\
    {
      id: 10,
      img: "https://realpopmania.com/cdn/shop/products/7_09e4fbbf-b2f8-46ac-8b30-924aee3cee98_700x.png?v=1668004296",
      title: "Pocahontas",
      character: "Pocahontas",
      description:
        "Pocahontas is displayed as a noble, free-spirited, and highly spiritual young woman. She expresses wisdom beyond her years and offers kindness and guidance to those around her.",
      value: 10900,
      currency: "₡",
      height: 11,
      weight: 100,
    },
    //
    //
    //_________Moana´s Info__________\\
    {
      id: 11,
      img: "https://realpopmania.com/cdn/shop/products/2_c4ea8277-12ef-49a9-9638-585b716bc731_700x.png?v=1668004298",
      title: "Moana",
      character: "Moana",
      description:
        "Moana is a sea-loving, strong-willed wayfarer. Though she has moments of self-doubt, she has great pride in who she is, and doesn't back away from new challenges.",
      value: 12900,
      currency: "₡",
      height: 11,
      weight: 108,
    },
    //
    //
    //_________Vanellope´s Info__________\\
    {
      id: 12,
      img: "https://realpopmania.com/cdn/shop/products/7_09e4fbbf-b2f8-46ac-8b30-924aee3cee98_700x.png?v=1668004296",
      title: "Ralph Breaks the Internet",
      character: "Vanellope",
      description:
        "Known as 'The Glitch', Vanellope is a pixelating programming mistake in the candy-coated cart-racing Sugar Rush. With a racer's spirit embedded in her coding, Vanellope is determined to earn her place in the starting lineup amongst the other racers.",
      value: 9900,
      currency: "₡",
      height: 9.5,
      weight: 109,
    },
    //
    //
    //_________Elsa´s Info__________\\
    {
      id: 13,
      img: "https://realpopmania.com/cdn/shop/products/8_22095305-42c6-4fba-8415-76cf0c9c085a_700x.png?v=1674814683",
      title: "Frozen",
      character: "Elsa",
      description:
        "Elsa looks poised, regal and reserved, but in reality, she lives in fear as she wrestles with a mighty secret—she was born with the power to create ice and snow. It's a beautiful ability, but also extremely dangerous.",
      value: 11950,
      currency: "₡",
      height: 11,
      weight: 100,
    },
    //
    //
    //_________Anna´s Info__________\\
    {
      id: 14,
      img: "https://endorshop.es/6408-large_default/anna-funko-pop-disney-frozen-2.jpg",
      title: "Frozen 2",
      character: "Anna",
      description:
        "Spirited and loving, Anna freely gives her heart. She always looks on the bright side and tries to do the next right thing for her kingdom and the people she cares about.",
      value: 12900,
      currency: "₡",
      height: 11,
      weight: 105,
    },
    //
    //
    //_________Raya´s Info__________\\
    {
      id: 15,
      img: "https://realpopmania.com/cdn/shop/products/1_2b88a4cf-ebf0-48a1-936d-e0f98552a835_700x.png?v=1668005361",
      title: "Raya and The Last Dragon",
      character: "Raya",
      description:
        "Raya is a headstrong young woman who is mature and wisened for someone her age. She is a very capable person and is shown to easily adapt to situations around her.",
      value: 9900,
      currency: "₡",
      height: 10,
      weight: 110,
    },
  ],
  ///-----------⬆⬆⬆---------DISNEY´S PRINCESS----------⬆⬆⬆-----------\\\
  //

  disney_characters: [
    //
    //------------⬇⬇⬇⬇--------DISNEY´S CHARACTERS--------⬇⬇⬇⬇-----------\\\
    //
    //_________Mushu´s Info__________\\
    {
      id: 16,
      img: "https://realpopmania.com/cdn/shop/products/mulan-mushu-funko-pop-vinyl-figure-popcultcha_1.1574302875_800x.png?v=1668017015",
      title: "Mulan",
      character: "Mushu",
      description:
        "He is a pint-sized, fast-talking, self-absorbed Chinese dragon and the self-appointed guardian of Fa Mulan.",
      value: 10900,
      currency: "₡",
      height: 9,
      weight: 102,
    },
    //
    //_________Mufasa´s Info__________\\
    {
      id: 17,
      img: "https://realpopmania.com/cdn/shop/products/9_c9dad7f0-4b48-42da-a539-f9e7f36bd82b_700x.png?v=1668005393",
      title: "The Lion King",
      character: "Mufasa",
      description:
        "A huge, powerful male lion, Mufasa was the King of the Pride Lands, father of Simba, and mate of Sarabi. He is shown to be a wise and fair ruler, who follows the 'Circle of Life'.",
      value: 10900,
      currency: "₡",
      height: 12,
      weight: 120,
    },
    //
    //_________Scar´s Info__________\\
    {
      id: 18,
      img: "https://realpopmania.com/cdn/shop/products/6_2c18fba1-7bb2-4f87-8ccd-f707bf92d276_453x.png?v=1668001014",
      title: "The Lion King",
      character: "Scar",
      description:
        "Scar is the head of the king's guard and has the power of the Roar of the Ancients, a cry that can destroy everything.",
      value: 11900,
      currency: "₡",
      height: 12,
      weight: 110,
    },
    //
    //_________Simba´s Info__________\\
    {
      id: 19,
      img: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw61064ff1/images/funko/36395-2.png?sw=800&sh=800",
      title: "The Lion King",
      character: "Simba-child",
      description:
        "When Simba's wicked uncle plots to take his father's throne, Simba escapes and lives in the oasis.",
      value: 10950,
      currency: "₡",
      height: 11,
      weight: 106,
    },
    //
    //_________Zazu´s Info__________\\
    {
      id: 20,
      img: "https://kryptonitecharacterstore.com/cdn/shop/products/shopping_3_c1eb0687-5c46-4fe2-8495-75527aab5aac_800x.png?v=1571706504",
      title: "The Lion King",
      character: "Zazu",
      description:
        "He is an uptight, red-billed hornbill that served as King Mufasa's majordomo, and the begrudged caretaker of Simba. Zazu is charged with upholding order within the Pride Lands, though he is rarely taken seriously due to his diminutive size and fragile temper.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 109,
    },
    //
    //_________Nala´s Info__________\\
    {
      id: 21,
      img: "https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/l/i/lion-king-nala-funko-pop-vinyl-figure-popcultcha-new.png",
      title: "The Lion King",
      character: "Nala",
      description:
        "Nala is an enthusiastic, strong and lively lion cub at the beginning of the story, who more than holds her own with her royal friend Simba.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 106,
    },
    //
    //_________Timon´s Info__________\\
    {
      id: 22,
      img: "https://endorshop.es/5563-home_default/figura-timon-lau-rey-leon-funko-pop-vinyl.jpg",
      title: "The Lion King",
      character: "Timon",
      description:
        "Timon can be self-centered and thoughtless at times. One example is proven when they decided to take Simba in, he robs Pumbaa of the credit Pumbaa rightfully deserves. But in the end, he has a good heart, and is loyal to his friends and family.",
      value: 10900,
      currency: "₡",
      height: 11,
      weight: 105,
    },
    //
    //_________ Pumba´s Info__________\\
    {
      id: 23,
      img: "https://endorshop.es/5561-large_default/figura-luau-pumba-rey-leon-funko-pop-vinyl.jpg",
      title: "The Lion King",
      character: "Pumba",
      description:
        "Pumbaa is a fun loving, happy go lucky warthog with a deep heart, though he is quick to panic when something goes wrong. He shows deep concern for Bunga when he is told of his future role in the Lion Guard, though soon comes to accept it.",
      value: 10900,
      currency: "₡",
      height: 11,
      weight: 105,
    },
    //
    //_________Lilo´s Info__________\\
    {
      id: 24,
      img: "https://realpopmania.com/cdn/shop/products/9_cef250ce-5d3c-4483-acfa-4246cba8e67a_700x.png?v=1668005512",
      title: "Lilo & Stitch",
      character: "Lilo with Scrump",
      description:
        "Lilo is often alienated from the other children on the island, who consider her to be an irritating troublemaker. This doesn't stop Lilo from trying to hang out though, as she seems blissfully unaware of the fact that she is considered an outcast.",
      value: 9900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Stitch´s Info__________\\
    {
      id: 25,
      img: "https://realpopmania.com/cdn/shop/products/4_35bdda54-163b-44e4-8bde-1d7bd0eb29be_700x.png?v=1668005510",
      title: "Lilo & Stitch ",
      character: "Stitch ",
      description:
        "He is an illegal genetic experiment created by Jumba Jookiba, whose original primary function is to destroy everything he touches. He is designed to be abnormally strong, virtually indestructible, super-intelligent, and very mischievous. His one true place is with Lilo and her ʻohana.",
      value: 9900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Dumbos´s Info__________\\
    {
      id: 26,
      img: "https://realpopmania.com/cdn/shop/products/11_2965cfd1-8a7b-4cf9-bf73-24a4d90618c7_700x.png?v=1668002336",
      title: "Dumbo",
      character: "Dumbo",
      description:
        "an elephant who is cruelly nicknamed 'Dumbo', as in 'dumb'. He is ridiculed for his big ears, but in fact he is capable of flying by using his ears as wings",
      value: 11900,
      currency: "₡",
      height: 12,
      weight: 125,
    },
    //
    //_________Sebastian´s Info__________\\
    {
      id: 27,
      img: "https://realpopmania.com/cdn/shop/products/1_0f5c990b-7abb-46ba-8bb5-b1c205e5863d_700x.png?v=1667999656",
      title: "The Little Mermaid",
      character: "Sebastian",
      description:
        "Sebastian is the king's royal court composer and holds a rather passionate love for music. While usually carefree, Sebastian is often seen to be very grumpy and worrisome. This is mostly due to Ariel's stubbornness, who he is found with regularly.",
      value: 12900,
      currency: "₡",
      height: 12,
      weight: 115,
    },
    //
    //_________Flounder´s Info__________\\
    {
      id: 28,
      img: "https://static.wixstatic.com/media/beffc4_e333a48d6ca94c199d83b11d4378baeb~mv2.png/v1/fill/w_530,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/beffc4_e333a48d6ca94c199d83b11d4378baeb~mv2.png",
      title: "The Little  Mermaid",
      character: "Flounder",
      description:
        "lounder gets scared easily, and is prone to panicking under stressful situations, but when Ariel is in trouble, he comes through for her without hesitation. He is undoubtedly loyal, freakishly adorable, and characteristically lovable.",
      value: 10900,
      currency: "₡",
      height: 11,
      weight: 106,
    },
    //
    //_________Scuttle´s Info__________\\
    {
      id: 29,
      img: "https://realpopmania.com/cdn/shop/products/little-mermaid-scuttle-funko-pop-vinyl-figure-popcultcha_1.1562543331_800x.png?v=1668012649",
      title: "The Little Mermaid",
      character: "Scuttle",
      description:
        "He presents himself as an expert on human objects, with whom Ariel consults about items she salvages. He refers to a fork as a 'dinglehopper,' and a smoking pipe as a 'snarfblatt.'",
      value: 10900,
      currency: "₡",
      height: 12,
      weight: 105,
    },
    //
    //_________Peter´s Info__________\\
    {
      id: 30,
      img: "https://realpopmania.com/cdn/shop/products/8_76fe3d4e-7f75-4a1e-87ad-863cb8e02883_700x.png?v=1687013238",
      title: "Peter Pan",
      character: "Peter Pan",
      description:
        "The famous boy who never grows old, Peter Pan is boastful and carefree; self-centred and oblivious; forgetful and fearless. In short, he is everything that you would expect the essence of childhood to be.",
      value: 9900,
      currency: "₡",
      height: 11,
      weight: 105,
    },
    //
    //_________Tinkerbell´s Info__________\\
    {
      id: 31,
      img: "https://realpopmania.com/cdn/shop/products/5_48eaa206-fe56-4f94-b54d-0fbe565cfc34_700x.png?v=1687013227",
      title: "Peter Pan",
      character: "Tinkerbell",
      description:
        "inker Bell is portrayed as a winged, six-inch-tall tomboyish sprite with a red 'pixie cut' hairstyle. She wears a ragged leather tunic with matching shorts and carries a dagger strapped to her leg. Only while flying does she appear as the traditional ball of light.",
      value: 9900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    ///-----------⬆⬆⬆---------DISNEY´S CHARACTERS----------⬆⬆⬆-----------\\\
  ],
  //
  pixar: [
    //

    //------------⬇⬇⬇⬇--------PIXAR´S CHARACTERS--------⬇⬇⬇⬇-----------\\\
    //
    //_________Woody´s Info__________\\
    {
      id: 32,
      img: "https://realpopmania.com/cdn/shop/products/8_09f65c96-e3ab-4340-8ea5-aa2ff326f5e8.png?v=1687013336",
      title: "Toy Story",
      character: "Woody",
      description:
        "Woody is a loyal toy who has been Andy's favorite toy since kindergarten. Woody is a smart, determined, and passionate man, and would do anything for his nearest and dearest friends.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Rex´s Info__________\\
    //
    {
      id: 33,
      img: "https://cdn.popcultcha.com.au/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/5/8/58179-toy-story-rex-deluxe-funko-pop-vinyl-figure-popcultcha.png",
      title: "Toy Story",
      character: "Rex",
      description:
        "Rex is a major character in the Disney•Pixar Toy Story franchise. He is an anxiety-riddled, green plastic Tyrannosaurus Rex figure originally belonging to Andy Davis.",
      value: 10900,
      currency: "₡",
      height: 13,
      weight: 125,
    },
    //
    //_________Olaf´s Info__________\\
    //
    {
      id: 34,
      img: "https://endorshop.es/6310-large_default/olaf-frozen-2-funko-pop-disney.jpg",
      title: "Frozen",
      character: "Olaf",
      description:
        "He is innocent, outgoing and loves all things summer. Olaf may be a bit naive, but his sincerity and good-natured temperament make him a true friend to Anna and Elsa.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Buzzlightyear´s Info__________\\
    //
    {
      id: 35,
      img: "https://www.pngkey.com/png/full/969-9695611_toy-story-4-funko-pop-buzz-lightyear-floating.png",
      title: "Toy Story",
      character: "Buzz-Lightyear",
      description:
        "Buzz Lightyear is a spaceman action figure who originally belonged to Andy. He is also the best friend of Sheriff Woody and the boyfriend of Jessie. What is this? Buzz is a universal space ranger from the Intergalactic Alliance and the captain of the Alliance's team.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________flik´s Info__________\\
    //
    {
      id: 36,
      img: "https://cdn.shopify.com/s/files/1/0678/0721/5889/products/12_763e2830-13cf-45d3-8c38-10c27fbe712c_400x.png?v=1679929723",
      title: "A Bug's Life",
      character: "Flik",
      description:
        "Flik is a nerdy, intuitive, inventive, and courageous ant. Although he is a well-meaning bug of the ant colony and wants to make a difference to his colony's way of life.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Bo peep´s Info__________\\
    //
    {
      id: 37,
      img: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb3fd5c24/images/funko/37391-1.png?sw=346&sh=346",
      title: "Toy Story",
      character: "Bo-Peep",
      description:
        "Bo Peep is portrayed as a very flirtatious, romantic, sensible and levelheaded toy. She is depicted as gentle, ladylike, and kindhearted.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Jessie´s Info__________\\
    //
    {
      id: 38,
      img: "https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1387245/Jessie_Vinyl_Art_Toys_84e82ae9-ebb9-45e1-bc25-896ce2d0595f.png",
      title: "Toy Story",
      character: "Jessie",
      description:
        "Jessie is a rough-and-tumble cowgirl doll with a passion for yodeling. Since abandoned by her original owner, she's sensitive to being left behind; however, she's also an incredibly optimistic member of Andy's toy gang.",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Bullseye´s Info__________\\
    //
    {
      id: 39,
      img: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw034522cb/images/funko/37013-2.png?sw=800&sh=800",
      title: "Toy Story",
      character: "Bullseye",
      description:
        "He is Jessie's horse and a member of Woody's Roundup. Despite being a horse, Bullseye acts more like a dog. He tucks his tail down and hides when he's scared, and when he's happy, he just has to lick something—in this case, Woody. ",
      value: 10900,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Mr.incredible´s Info__________\\
    //
    {
      id: 40,
      img: "https://cdn.popcultcha.com.au/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/d/i/disney-incredibles-2-mr-incredible-funko-pop-vinyl-figure-popcultcha.png",
      title: "The Incredibles",
      character: "Mr.incredible",
      description:
        "Mr. Incredible is considered one of the most powerful Supers. During his early career, he was known for working alone, which was something that led him to push away Buddy Pine.",
      value: 10500,
      currency: "₡",
      height: 14,
      weight: 110,
    },
    //
    //_________Elastigirl´s Info__________\\
    //
    {
      id: 41,
      img: "https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/d/i/disney-incredibles-2-elastigirl-funko-pop-vinyl-figure-popcultcha.png",
      title: "The Incredibles",
      character: "Elastigirl",
      description:
        "She is an elastic and dexterous superheroine who can stretch any part of her body to great lengths, and mold it into several shapes and sizes.",
      value: 10500,
      currency: "₡",
      height: 14,
      weight: 106,
    },
    //
    //_________Violet´s Info__________\\
    //
    {
      id: 42,
      img: "https://realpopmania.com/cdn/shop/products/disney-incredibles-2-violet-funko-pop-vinyl-figure-popcultcha.1523569236_grande.png?v=1668013489",
      title: "The Incredibles",
      character: "Violet",
      description:
        "Socially awkward, outspoken and sarcastic, Violet plays her teenager role to perfection—all while secretly mastering her super powers of invisibility and creating force fields. A Super at heart, Violet can't help her urge to fight crime alongside her family.",
      value: 10500,
      currency: "₡",
      height: 14,
      weight: 104,
    },
    //
    //_________Dash Info__________\\
    //
    {
      id: 43,
      img: "https://www.pngkey.com/png/full/585-5851845_pop-figure-disney-dash-disney-pixar-funko-pop.png",
      title: "The Incredibles",
      character: "Dash",
      description:
        "Dashiell Parr is a 10-year-old boy—restless, relentless, curious—with the remarkable power of super speed. Dash sports a hearty sense of adventure and a boundless supply of energy.",
      value: 10500,
      currency: "₡",
      height: 13,
      weight: 105,
    },
    //
    //_________Jack-Jakc´s Info__________\\
    //
    {
      id: 44,
      img: "https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/f/u/fun36639-incredibles-2-jack-jack-10-inch-pop-vinyl-figure-popcultcha-01.png",
      title: "The Incredibles",
      character: "Jack-Jack",
      description:
        "Jack-Jack Parr, the baby of the family, likes to sit back with a bottle and a good story. Well-versed in gibberish with a penchant for throwing food, Jack-Jack seems like a typical toddler, but he just might turn out to be the most powerful Parr in the household.",
      value: 10500,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Carl & Ellie Disney´s Info__________\\
    //
    {
      id: 45,
      img: "https://realpopmania.com/cdn/shop/products/4_85e13e98-895d-4e73-8407-6a703dde3e85_700x.png?v=1674814670",
      title: "Up",
      character: "Carl & Ellie Disney",
      description:
        "Designer Edna Mode prides herself on crafting super suits that are both functional and fabulous. She's sharp, fiery and determined. She will do anything to help her friends—even if they don't think they need it.",
      value: 10950,
      currency: "₡",
      height: 10,
      weight: 100,
    },
    //
    //_________Frozone´s Info__________\\
    //
    {
      id: 46,
      img: "https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/d/i/disney-incredibles-2-frozone-funko-pop-vinyl-figure-popcultcha.png",
      title: "The Incredibles",
      character: "Frozone",
      description:
        "He is the best friend and a close ally of Mr. Incredible and the Parr family. He has the ability to create ice and freeze surfaces by manipulating moisture.",
      value: 11900,
      currency: "₡",
      height: 15,
      weight: 120,
    },
    //
    //_________jack jack´s Info__________\\
    //
    {
      id: 47,
      img: "https://realpopmania.com/cdn/shop/products/disney-incredibles-2-jack-jack-chrome-funko-pop-vinyl-figure-popcultcha.1523926529_400x.png?v=1668013481",
      title: "The Incredibles",
      character: " Iron-Jack",
      description:
        "Jack-Jack Parr, the baby of the family, likes to sit back with a bottle and a good story. Well-versed in gibberish with a penchant for throwing food, Jack-Jack seems like a typical toddler, but he just might turn out to be the most powerful Parr in the household.",
      value: 12000,
      currency: "₡",
      height: 12,
      weight: 120,
    },
    //
    ///-----------⬆⬆⬆---------PIXAR´S CHARACTERS----------⬆⬆⬆-----------\\\
    //
  ],
  //
  villians: [
    //------------⬇⬇⬇⬇--------DISNEY´S VILLIANS--------⬇⬇⬇⬇-----------\\\
    //
    //
    //_________Ursula´s Info__________\\
    //
    {
      id: 48,
      img: "https://realpopmania.com/cdn/shop/products/9_6d93d8b5-23f2-44e0-8dbc-d77375e9a48d_700x.png?v=1668004163",
      title: "The Little Mermaid",
      character: "Ursula",
      description:
        "Ursula is very manipulative and has a talent of making perfect sense and making great points when trying to strike a deal. ",
      value: 12500,
      currency: "₡",
      height: 14,
      weight: 120,
    },
    //
    //_________Captain Hook´s Info__________\\
    //
    {
      id: 49,
      img: "https://realpopmania.com/cdn/shop/products/4_bcb879d5-c1af-4384-9dcf-50ca249704d2_700x.png?v=1687013224",
      title: "Peter Pan",
      character: "Captain Hook",
      description:
        "His two principal fears are the sight of his own blood (supposedly an unnatural colour) and the crocodile who pursues him after eating the hand cut off by Pan. An iron hook replaced his severed hand, which gave the pirate his name.",
      value: 11000,
      currency: "₡",
      height: 12,
      weight: 110,
    },
    //
    //_________Jafar´s Info__________\\
    //
    {
      id: 50,
      img: "https://realpopmania.com/cdn/shop/products/2_249a323b-210e-426f-8bd3-46f97182a5e2_572x.png?v=1668004238",
      title: "Aladdín",
      character: " Red Jafar (as Genie) ",
      description:
        "Jafar is a masterful liar who has smooth-talked his way to the top, with the help of a little magical mind control. ",
      value: 10500,
      currency: "₡",
      height: 14,
      weight: 115,
    },
    //
    //_________Doctor Facilier´s Info__________\\
    //
    {
      id: 51,
      img: "https://realpopmania.com/cdn/shop/products/7_3314b6c6-7b55-4b0a-a272-10a99677ea5d_700x.png?v=1668004174",
      title: "The Princess and the Frog",
      character: "Doctor Facilier",
      description:
        "He is an evil, smooth-talking voodoo witch doctor who plots to rule New Orleans with help from his 'friends on the other side'.",
      value: 10000,
      currency: "₡",
      height: 13,
      weight: 105,
    },
    //
    //_________Cruella de Vil´s Info__________\\
    //
    {
      id: 52,
      img: "https://realpopmania.com/cdn/shop/products/3_76d4d9ad-eb79-42d3-a3fe-2f549713598a_700x.png?v=1668004170",
      title: "101 Dalmatians",
      character: "Cruella de Vil",
      description:
        " Cruella de Vil wants to kill so that she can use their skins to make a coat.",
      value: 12000,
      currency: "₡",
      height: 15,
      weight: 120,
    },
    //
    //_________Evil Queen´s Info__________\\
    //
    {
      id: 53,
      img: "https://realpopmania.com/cdn/shop/products/2_f059a4b9-a562-4fd3-8c95-f0d2a7e9b532_700x.png?v=1668004168",
      title: "Snow White and the Seven Dwarfs",
      character: "Evil Queen",
      description:
        ", the Evil Queen is cold, sadistic, cruel, and extremely vain, owning a magic mirror, and obsessively desiring to remain the 'fairest in the land'.",
      value: 12000,
      currency: "₡",
      height: 15,
      weight: 120,
    },
    //
    //_________Maleficent´s Info__________\\
    //
    {
      id: 54,
      img: "https://realpopmania.com/cdn/shop/products/6_d55532d3-5280-4079-b21e-bf171118f8d3_700x.png?v=1668004180",
      title: "Sleeping Beauty",
      character: "Maleficent",
      description:
        "She is represented as an evil fairy and the self-proclaimed 'Mistress of All Evil' who, after not being invited to a christening, curses the infant Princess Aurora to 'prick her finger on the spindle of a spinning wheel and die' before the sun sets on Aurora's sixteenth birthday.",
      value: 12000,
      currency: "₡",
      height: 15,
      weight: 120,
    },
    //
    //_________Maleficent Dragon´s Info__________\\
    //
    {
      id: 55,
      img: "https://realpopmania.com/cdn/shop/products/3_15265528-f9fc-43c0-95ee-dc767c672748_700x.png?v=1668003952",
      title: "Sleeping Beauty",
      character: "Maleficent Dragon",
      description:
        "The dragon's body was totally consumed during the fire, leaving just the charred skeleton behind.",
      value: 15000,
      currency: "₡",
      height: 25,
      weight: 200,
    },
    //
    //_________Lady Tremaine´s Info__________\\
    //
    {
      id: 56,
      img: "https://realpopmania.com/cdn/shop/products/1_72cffa27-cba1-446a-80f2-55e22f96b8a4_700x.png?v=1668004175",
      title: "Cinderella",
      character: "Lady Tremaine",
      description:
        "Lady Tremaine is a sophisticated socialite. But in her private life she's more like a tyrant, demanding perfection from her daughters and servitude from Cinderella.",
      value: 12000,
      currency: "₡",
      height: 15,
      weight: 120,
    },
    //
    //_________Hades with Pain & Panic´s Info__________\\
    //
    {
      id: 57,
      img: "https://realpopmania.com/cdn/shop/products/27_01268aca-c09a-48a3-9b35-63cc87e5e0d2_700x.png?v=1668000817",
      title: "Hercules",
      character: "Hades with Pain & Panic",
      description:
        "He is the fast-talking god of the Underworld, known for having a fiery temper and a vendetta against his eldest brother, Zeus. ",
      value: 15000,
      currency: "₡",
      height: 15,
      weight: 220,
    },
    //
    //_________Yzma & Kronk´s Info__________\\
    //
    {
      id: 58,
      img: "https://realpopmania.com/cdn/shop/products/1_fd3c1dca-510b-4453-b932-ddb8d36b7ed3_700x.png?v=1669377253",
      title: "The Emperor's New Groove",
      character: "Yzma",
      description:
        "Yzma is malicious, funny, silly, raspy, and power-hungry. However, early in the first movie, it seems that she raised Kuzco. .",
      value: 25000,
      currency: "₡",
      height: 15,
      weight: 220,
    },
    //
    //_________Scar with Hyenas´s Info__________\\
    //
    {
      id: 59,
      img: "https://realpopmania.com/cdn/shop/products/14_402797be-4fdf-47ec-87e9-8e3af9cb85e0_700x.png?v=1668000450",
      title: "The Lion King",
      character: "Scar with Hyenas",
      description:
        "The scheming younger brother of Mufasa, Scar was next-in-line to take the throne until his nephew Simba, Mufasa's son, was born, replacing him. ",
      value: 25000,
      currency: "₡",
      height: 20,
      weight: 225,
    },
    //
    //_________Gaston´s Info__________\\
    //
    {
      id: 60,
      img: "https://realpopmania.com/cdn/shop/products/19_1839d3f2-fac9-4c1d-9b3d-6757d7d3d40c_700x.png?v=1668003203",
      title: "Beauty and the Beast",
      character: "Gaston",
      description:
        "Gaston is an arrogant and aggressive hunter whose unrequited feelings for the intellectual Belle drive him to murder his adversary.",
      value: 12000,
      currency: "₡",
      height: 12,
      weight: 110,
    },
    //
    //_________Queen of Hearts´s Info__________\\
    //
    {
      id: 61,
      img: "https://realpopmania.com/cdn/shop/products/10_8546e3d9-fabe-4d77-ad66-eadcdb2155a8_700x.png?v=1668005484",
      title: "Alice in Wonderland",
      character: "Queen of Hearts",
      description:
        "she is an incredibly immature, impatient, argumentative, domineering, oppressive, and sensitive individual, prone to temper tantrums, and, as stated above, rather egotistical.",
      value: 12000,
      currency: "₡",
      height: 12,
      weight: 120,
    },
    //
    //_________Witch´s Info__________\\
    //
    {
      id: 62,
      img: "https://i.pinimg.com/originals/fa/6b/af/fa6baf95cbca9a6b26082f4b4ab6aeee.png",
      title: "Snow White and the Seven Dwarfs",
      character: "Witch",
      description:
        "This led her to take a potion to transform herself into an old woman, after trying to murder her, in order to tempt Snow White to eat a poisoned apple.",
      value: 12000,
      currency: "₡",
      height: 12,
      weight: 120,
    },
    //
    //_________cheff Louis´s Info__________\\
    //
    {
      id: 63,
      img: "https://endorshop.es/5983-large_default/chef-louis-sirenita-little-mermaid-funko-pop.jpg",
      title: "The Little Mermaid",
      character: "Cheff Louis",
      description:
        "He is the French-accented chef of Prince Eric's Castle who loves 'les poissons' to an almost unhealthy extent. He is Sebastian's arch-enemy, and is infamous for trying to cook the crab.",
      value: 12000,
      currency: "₡",
      height: 12,
      weight: 120,
    },
  ],
};

export { funkoData };
