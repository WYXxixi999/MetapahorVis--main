import { Content } from "./content";

export let paper = [
    new Content
        (
            '2019RMap-SocialMedia-1',//id
            'R-Map(2019)',//name
            //'title'
            'R-Map: A Map Metaphor for Visualizing Information Reposting Process in Social Media',
            '2019',//year
            //authors
            'Shuai Chen, Sihang Li, Siming Chen, and Xiaoru Yuan',
            //pictureUPath
            '../picture100/2019RMap-SocialMedia.png',
            //group:Form/Interaction,Z/R/F/D/K,1~13,shape
            ['Form', 'R', ['Text', 'Graph'], 'Map'],
            //application
            ['SocialMedia'],
            //constructMethod构建隐喻的方法 
            ["Topology", "Attribute", "Hybrid"],
            //task
            ["Present", "Summarize"],
            'https://ieeexplore.ieee.org/abstract/document/8805419',//url
            //publication
            'IEEE Transactions on Visualization and Computer Graphics ( Volume: 26, Issue: 1, Jan. 2020)',
            //innerContent
            {
                Abstract: "",
                Func: ["Propogate", "Influence"],
                Feature: ["Dynamic", "Derive"]
            }
        ),
    new Content(
        "2019Flower-Authors-2",//id
        "Influence Flowers(2019)",//name
        //title
        "Influence Flowers of Academic Entities",
        "2019",//year
        //authors
        "Minjeong Shin, Alexander Soen, Benjamin T. Readshaw, Stephen M. Blackburn, Mitchell Whitelaw, Lexing Xie*",
        //picturePath
        "../picture100/2019Flower-Authors.png",
        //group:Form/Interaction,Z/R/F/D/K,1~13,shape
        ['Form', 'Z', ['Text', 'Graph'], 'Flower'],
        //application
        ['academic'],
        //constructMethod构建隐喻的方法 
        ["Attribute", "Tolpology", "Hybrid"],
        //task
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/8986934",//url
        //publication
        "2019 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2019VirtualDesk-Interaction-3",//id
        "VirtualDesk(2019)",//name
        //title
        "Comfortable Immersive Analytics With the VirtualDesk Metaphor",
        "2019",//year
        //authors
        "Jorge A. Wagner Filho, Carla M. D. S. Freitas,and Luciana Nedel",
        //picturePath
        "../picture100/2019VirtualDesk-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction", "R", ["Spatial"],"Desktop"],
        //application应用场景
        ["HCI","SciExpriment"],
        //constructMethod构建隐喻的方法 
        [""],
        //task任务/功能
        ["Expolre"],
        "https://ieeexplore.ieee.org/document/8640072",//url
        //publication
        "IEEE Computer Graphics and Applications ( Volume: 39, Issue: 3, May-June 1 2019)",
        //innerContent
        "",
    ),
    new Content(
        "2019-Pointer-Interaction-4",//id
        "Pointer(2019)",//name
        //title
        "There Is No Spoon: Evaluating Performance, Space Use, and Presence with Expert Domain Users in Immersive Analytics",
        "2019",//year
        //authors
        "Andrea Batch, Andrew Cunningham, Maxime Cordeil, Niklas Elmqvist, Tim Dwyer, Bruce H. Thomas, Kim Marriott",
        //picturePath
        "../picture100/2019-Pointer-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Spatial"],"Pointer"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/8820171",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 26, Issue: 1, Jan. 2020)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2019SpaceTimeCube-Interaction-5",//id
        "Space-Time Cube(2019)",//name
        //title
        "Evaluating an Immersive Space-Time Cube Geovisualization for Intuitive Trajectory Data Exploration",
        "2019",//year
        //authors
        "Jorge A. Wagner Filho, Student Member, IEEE, Wolfgang Stuerzlinger, Member, IEEE, and Luciana Nedel",
        //picturePath
        "../picture100/2019SpaceTimeCube-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction", "K", ["Spatial"],"Cube"],
        //application应用场景
        ["Geography"],
        //constructMethod构建隐喻的方法 
        [""],
        //task任务/功能
        ["Expolre"],
        "https://ieeexplore.ieee.org/document/8854316",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 26, Issue: 1, Jan. 2020)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),

    new Content(
        "2018Bacterium-Co-occruence-6",//id
        "Bacterium(2018)",//name
        //title
        "An Organic Visual Metaphor for Public Understanding of Conditional Co-occurrences",
        "2018",//year
        //authors
        "Keshav Dasu*,Takanori Fujiwara†,Kwan-Liu Ma‡",
        //picturePath
        "../picture100/2018Bacterium-Co-occruence.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form", "Z", ["Event"],"Bacterium"],
        //application应用场景
        ["BioloMedical","DigitHumanities"],
        //constructMethod构建隐喻的方法 
        ["Attribute"],
        //task任务/功能
        ["Expolre","Present"],
        "https://ieeexplore.ieee.org/document/8823624",//url
        //publication
        "2018 IEEE Scientific Visualization Conference (SciVis)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2018Flower-Co-occruence-7",//id
        "Flower(2018)",//name
        //title
        "An Organic Visual Metaphor for Public Understanding of Conditional Co-occurrences",
        "2018",//year
        //authors
        "Keshav Dasu*,Takanori Fujiwara†,Kwan-Liu Ma‡",
        //picturePath
        "../picture100/2018Flower-Co-occruence.png",
        //group:Form / Intercaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form", "Z", ["Event"],"Flower"],
        //application应用场景
        ["BioloMedical","DigitHumanities"],
        //constructMethod构建隐喻的方法 
        ["Attribute"],
        //task任务/功能
        ["Expolre","Present"],
        "https://ieeexplore.ieee.org/document/8823624",//url
        //publication
        "2018 IEEE Scientific Visualization Conference (SciVis)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2018Lightening-Co-occruence-8",//id
        "Lightening(2018)",//name
        //title
        "An Organic Visual Metaphor for Public Understanding of Conditional Co-occurrences",
        "2018",//year
        //authors
        "Keshav Dasu*,Takanori Fujiwara†,Kwan-Liu Ma‡",
        //picturePath
        "../picture100/2018Lightening-Co-occruence.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form", "Z", ["Event"],"Lightening"],
        //application应用场景
        ["BioloMedical","DigitHumanities"],
        //constructMethod构建隐喻的方法 
        ["Attribute"],
        //task任务/功能
        ["Expolre","Present"],
        "https://ieeexplore.ieee.org/document/8823624",//url
        //publication
        "2018 IEEE Scientific Visualization Conference (SciVis)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2018-Brush-Interaction-9",//id
        "Brush(2019)",//name
        //title
        "FiberClay: Sculpting Three Dimensional Trajectories to Reveal Structural Insights",
        "2019",//year
        //authors
        "Christophe Hurter, Nathalie Henry Riche, Steven M. Drucker, Maxime Cordeil, Richard Alligier, Romain Vuillemot",
        //picturePath
        "../picture100/2018-Brush-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction", "Z", ["Spatial"],"Clay"],
        //application 应用场景
        ["BioloMedical","Geography"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        [""],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/8440808/",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 25, Issue: 1, Jan. 2019)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2017-EMap-SocialMedia",//id
        "EMap(2017)",//name
        //title
        "E-Map: A Visual Analytics Approach for Exploring Signifificant Event Evolutions in Social Media",
        "2017",//year
        //authors
        "Siming Chen,Shuai Chen,Lijing Lin,Xiaoru Yuan*,Jie Liang†,Xiaolong Zhang‡",
        //picturePath
        "../picture100/2017-EMap-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text"],""],
        //application 应用场景
        [""],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        [""],
        //task 任务/功能
        [""],
        "",//url
        //publication
        "",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
]