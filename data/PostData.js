const testData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Some example text for a post',
        user: "user1",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        user: "user2",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Panda_%2824986761703%29.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Red_Panda_%2824986761703%29.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        user: "user3",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg",
        mainimg: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bicho-pregui%C3%A7a_3.jpg"
    },
];

const finalsData = [
    {
        id: '100',
        title: 'ugh finals are so annoying...good vibes in my room though :)',
        user: "Samuel.A",
        profilepic: "https://i.pinimg.com/originals/d6/3e/77/d63e770cac9f9fa767cad4ec51066fb6.jpg",
        mainimg: "https://hackaday.com/wp-content/uploads/2011/11/led-sconces-spice-up-the-dorm-parties-e1322501678656.jpg"
    },
    {
        id: '101',
        title: 'gonna get through finals, one way or another! ',
        user: "StannyT",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
        mainimg: "https://media.tenor.com/images/3cf1ee0b895eef7e3b3990e0f0382922/tenor.png"
    },
    {
        id: '102',
        title: 'Thinking about when amine asked us to scream if we were done with finals in week 8',
        user: "Malika347",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGjgzlQV4Sz32kLyE4w_A-EvC3LgTUNALVEx1ywdu1MCIN43FdHFEa3psabUeThbod_M&usqp=CAU",
        mainimg: "https://i.kym-cdn.com/entries/icons/facebook/000/016/729/large.jpg"
    },
    {
        id: '103',
        title: 'I hate finals sooooo much',
        user: "Jermanie Brunson 240",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuSSJpUVdMYHVT2Oxe0jY_bPmRe1KhoaJdQ&usqp=CAU",
        mainimg: "https://keepmeme.com/meme/20210625/black-baby-kid-girl-crying-looking-at-mobile-camera-meme.webp"
    },
];

const froshData = [
    {
        id: '2',
        title: 'Woohooo!! Class of 2026!!!',
        user: "Ali Woo",
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mohamed_Salah_2018.jpg/330px-Mohamed_Salah_2018.jpg",
        mainimg: "https://pbs.twimg.com/media/Bo2NOyFIEAATIeM.jpg:large"
    }, {
        id: '23',
        title: 'I stepped out of math 51 for 2 minutes and missed 2 chapters smh ',
        user: "Mike K",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVhPQLuaU3ui9__6LMimN7fcnosnaFMoqfg&usqp=CAU",
        mainimg: "https://cdn.memes.com/up/67408201598240835/i/1615574158773.jpg"
    },
    {
        id: '234',
        title: 'Lost my keys on the quad. Will be eternally grateful to anyone who finds them!',
        user: "Kelly Olson",
        profilepic: "https://facts.net/wp-content/uploads/2020/08/AdobeStock_209028852.jpeg",
        mainimg: "https://content.spiceworksstatic.com/service.community/p/post_images/0000196436/57c46973/attached_image/IMAG0069.jpg"
    },
];

const dartyData = [
    {
        id: '3',
        title: 'darty szn!! Come thru to Terman later for good vibes',
        user: "Quentin_P",
        profilepic: "https://i.ebayimg.com/images/g/0LwAAOxy2YtRt3V9/s-l400.jpg",
        mainimg: "https://media.blogto.com/articles/20180525-collectifnude.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70"
    }, {
        id: '31',
        title: 'Where the darties at this weekend? ',
        user: "AKBee",
        profilepic: "https://m.media-amazon.com/images/M/MV5BMTkzNjIwNzQ1NV5BMl5BanBnXkFtZTgwMDUwODk2NDM@._V1_UY317_CR125,0,214,317_AL_.jpg",
        mainimg: "https://thumbs.dreamstime.com/b/vector-thinking-guy-meme-face-any-design-eps-80093538.jpg"
    },
    {
        id: '310',
        title: 'I live for darty szn !! ',
        user: "Jenny_O",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumrOWJRvDO6KX0OmFFoEG_ZB86GhHZFWL5g&usqp=CAU",
        mainimg: "https://spoonuniversity.com/wp-content/uploads/sites/98/2016/06/FullSizeRender-34.jpg"
    },
];

const springData = [
    {
        id: '4',
        title: 'i love spring quarter...such good vibes',
        user: "Uma0725",
        profilepic: "https://res.cloudinary.com/teepublic/image/private/s--0hjF2V9F--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1602308584/production/designs/14880387_0",
        mainimg: "https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
    },
    {
        id: '41',
        title: 'Hoping CME 102 doesnt destroy my spring ',
        user: "Calebtheog",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFWCz9tn0utCzE-i7J2tll6aTwu03Xt_0dQ&usqp=CAU",
        mainimg: "https://i.kym-cdn.com/entries/icons/facebook/000/021/464/14608107_1180665285312703_1558693314_n.jpg"
    },
    {
        id: '5',
        title: 'woke up and listened to my favorite album today! Loving the good vibes today! #spring',
        user: "AllyP",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEgcxylLiN2E-Qr3fKZgmNVqEh4h6G8CcPhgHbDo9gwzdLr-pI72sBkIV8508el13FVg&usqp=CAU",
        mainimg: "https://res.cloudinary.com/jerrick/image/upload/v1627152311/60fc5fb7434f31001d03a37e.jpg"
    },
    {
        id: '52',
        title: 'Thinking this last spring quarter is gonna be a good one ! #seniorszn!! ',
        user: "AllyP",
        profilepic: "https://static5.depositphotos.com/1037987/476/i/600/depositphotos_4760660-stock-photo-middle-eastern-woman-her-son.jpg",
        mainimg: "https://ee.stanford.edu/sites/default/files/inline-images/A-commncement-headerA-1200.jpg"
    },
    {
        id: '6',
        title: 'waiting for the party of the quarter today! I know itll be good vibes!',
        user: "DestinyHW",
        profilepic: "https://cdn.shopify.com/s/files/1/2352/9433/products/dblack_dfc68141-f70a-4543-97f3-2c56a14e593f_1024x.png?v=1588831280",
        mainimg: "https://vista.today/wp-content/uploads/2021/04/College-student-smiling-with-her-laptop-602x341.jpg"
    }
    
];

const DATA = {
    testData: testData,
    finalsData: finalsData,
    dartyData: dartyData,
    froshData: froshData,
    springData: springData,
    allData: finalsData.concat(dartyData, froshData, springData),
};

export default DATA;