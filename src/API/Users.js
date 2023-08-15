//These are the data about all funko Pops  that we´ll show on the screen

const productsData = {
  count: 64,
  items: [
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
    },
    //
    //
    //_________Belle´s Info__________\\
    {
      id: 9,
      img: "https://realpopmania.com/cdn/shop/products/2_0c9d78a9-cfaa-4f5b-b8d3-c3857f8e7ea5_700x.png?v=1668006238",
      title: "Beauty and the Beast",
      character: "Belle",
      description:
        "She is confident and comfortable being herself and knows that it's not fair to judge a book—or a beast—by its cover. She yearns to escape the simplicity of her life and find adventure beyond her provincial town.",
      value: 10950,
      currency: "₡",
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
    },
  ],
};

export { productsData };
