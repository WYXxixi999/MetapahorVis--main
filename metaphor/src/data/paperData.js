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
                Abstract: "55555吴愚希我太悲伤太恐怖太可怕了",
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
        "2017-EMap-SocialMedia-10",//id
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
    new Content(
        "2016-Wheel-Brand-11",//id
        "Wheel(2016)",//name
        //title
        "SocialBrands: Visual Analysis of Public Perceptions of Brands on Social Media",
        "2016",//year
        //authors
        "Xiaotong Liu∗,Anbang Xu†,Liang Gou‡,Haibin Liu§,Rama Akkiraju¶,Han-Wei Shen",
        //picturePath
        "../picture100/2016-Wheel-Brand.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2016-Flow-Ideas-12",//id
        "Flow(2016)",//name
        //title
        "How Ideas Flow across Multiple Social Groups",
        "2016",//year
        //authors
        "Xiting Wang∗ Shixia Liu∗ Yang Chen∗ Tai-Quan Peng† Jing Su‡ Jing Yang§ Baining Guo¶",
        //picturePath
        "../picture100/2016-Flow-Ideas.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2015-Flow-CiteText-13",//id
        "Flow(2015)",//name
        //title
        "CiteRivers: Visual Analytics of Citation Patterns",
        "2015",//year
        //authors
        "Florian Heimerl, Qi Han, Steffen Koch Member, IEEE, Thomas Ertl Member, IEEE",
        //picturePath
        "../picture100/2015-Flow-CiteText.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2014-Band-Emotion-14",//id
        "Band(2014)",//name
        //title
        "PEARL: An Interactive Visual Analytic Tool for Understanding Personal Emotion Style Derived from Social Media",
        "2014",//year
        //authors
        "Jian Zhao, Liang Gou, Fei Wang, and Michelle Zhou",
        //picturePath
        "../picture100/2014-Band-Emotion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2014-Bubble-Emotion-15",//id
        "Bubble(2014)",//name
        //title
        "PEARL: An Interactive Visual Analytic Tool for Understanding Personal Emotion Style Derived from Social Media",
        "2014",//year
        //authors
        "Jian Zhao, Liang Gou, Fei Wang, and Michelle Zhou",
        //picturePath
        "../picture100/2014-Bubble-Emotion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2013-Sedimentation-TimeSeries-16",//id
        "Sedimentation(2013)",//name
        //title
        "Visual Sedimentation",
        "2013",//year
        //authors
        "Samuel Huron, Romain Vuillemot, and Jean-Daniel Fekete, Senior Member, IEEE",
        //picturePath
        "../picture100/2013-Sedimentation-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2013-Kite-Interaction-17",//id
        "Kite(2013)",//name
        //title
        "Visualizing Large-Scale Atomistic Simulations in Ultra-Resolution Immersive Environments",
        "",//year
        //authors
        "Khairi Reda∗, Aaron Knoll, Ken-ichi Nomura, Michael E. Papka, Andrew E. Johnson, Jason Leigh",
        //picturePath
        "../picture100/2013-Kite-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","","",""],
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
    new Content(
        "2013-StickyNote-Interaction-18",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-StickyNote-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","","",""],
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
    new Content(
        "2013-MusicScore-CNVData-19",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-MusicScore-CNVData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2013-Shutter-Interaction-20",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Shutter-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","","",""],
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
    new Content(
        "2013-Bubble-DataExplore-21",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Bubble-DataExplore.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2013-Lines-TimeSeries-22",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Lines-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2013-Lines-EntitiesbyTimes-23",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Lines-EntitiesbyTimes.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2013-Clock-TimeSeries-24",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Clock-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2013-TimeLine-SocialMedia-25",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-TimeLine-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2013-DirectManipulation-Interaction-26",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-DirectManipulation-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","","",""],
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
    new Content(
        "2013-Map-SocialMedia-27",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Map-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Glyps-Biology-28",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Glyps-Biology.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-SunFlower-SocialMedia-29",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-SunFlower-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Flow-Analysis-30",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Flow-Analysis.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Arrows-PositionAndDirection-31",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Arrows-PositionAndDirection.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Spatial-Interaction-32",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Spatial-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","","",""],
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
    new Content(
        "2012-Slot-Tile-Drag-Interaction-33",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Slot-Tile-Drag-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-DashBoard-VideoSpeed-34",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-DashBoard-VideoSpeed.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Flow-Text-35",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Painting-MachineLearning-36",//id
        "",//name
        //title
        "An Intelligent System Approach to HigherDimensional Classification of Volume Data",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Painting-MachineLearning.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Wheel-MultiData-37",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Wheel-MultiData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Lens-Interaction-38",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-Filter-Flow-Interaction-39",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Filter-Flow-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-Film-Strip-VedioFrame-40",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Film-Strip-VedioFrame.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2012-Paper-on-Table-Interaction-41",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Paper-on-Table-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2011-Light-Surgery-42",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-Light-Surgery.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2011-ParallelCoordinate-Text-43",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-ParallelCoordinate-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2011-Fog-Uncertain-44",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-Fog-Uncertain.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2011-HeatMap-Event-45",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-HeatMap-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2011-Flow-Text-46",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2011-Slab-probability-47",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-Slab-probability.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2011-Seesaw-Comparion-48",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-Seesaw-Comparion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2011-TopoMap-MultiData-49",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-TopoMap-MultiData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2010-Flow-Text-50",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2010-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2010-Cartoon-QueryOrTemporal-51",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2010-Cartoon-QueryOrTemporal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2010-MapTerrian-Text-52",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2010-MapTerrian-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2010-Flow-MultiText-53",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2010-Flow-MultiText.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2010-Triangle-Opinion-54",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2010-Triangle-Opinion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2010-ParallelCoordinate-ClusterData-55",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2010-ParallelCoordinate-ClusterData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2011-Flower-WebData-56",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-Flower-WebData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","","",""],
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
    new Content(
        "2007-TopologicalLandscape-ScalarFunction-57",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2007-TopologicalLandscape-ScalarFunction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2007-FlowRiver-Video-58",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2007-FlowRiver-Video.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2007-Lens-Interaction-59",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2007-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2006-Map-WebPrefix-60",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2006-Map-WebPrefix.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2006-GpuTools-Medical-61",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2006-GpuTools-Medical.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2006-SpaceFilling-Interaction-62",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2006-SpaceFilling-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2006-Lens-Interaction-63",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2006-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2006-SolarSystem-Interaction-64",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2006-SolarSystem-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2006-Splitting-Interaction-65",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2006-Splitting-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2006-MapAndTimeline-Analysis-66",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2006-MapAndTimeline-Analysis.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2005-ParallelSet-Classify-67",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2005-ParallelSet-Classify.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2005-Piano-Signal-68",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2005-Piano-Signal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2005-Camara-Interaction-68",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2005-Camara-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2005-Lens-Interaction-69",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2005-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2005-TabbedPane-Interaction-70",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2005-TabbedPane-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2005-X-Ray-Network-71",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2005-X-Ray-Network.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2004-WrappedLine-DNA-72",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2004-WrappedLine-DNA.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2004-Telescope-Interaction-73",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2004-Telescope-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2004-Geography-Event-75",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2004-Geography-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2004-Pionter-Interaction-76",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2004-Pionter-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2003-Book-Anatomy-77",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2003-Book-Anatomy.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2011-City-SoftWare-78",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-City-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2004-Landscape-SoftWare-79",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2004-Landscape-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2003-SolarSystem-SoftWare-Yang-80",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2003-SolarSystem-SoftWare-Yang.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2003-CityAndLandscape-SoftWare-Vuduc-81",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2003-CityAndLandscape-SoftWare-Vuduc.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2007-City-Software-Alam-82",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2007-City-Software-Alam.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-City-SoftWare-Method-83",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-City-SoftWare-Method.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-Flow-Software-Code-84",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-Flow-Software-Code.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-TimeLine-SoftWareCode-85",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-TimeLine-SoftWareCode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-Flow-SourceCode-86",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-Flow-SourceCode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-CityMap-SoftWare-87",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-CityMap-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-City-SoftWare-Wettel-88",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-City-SoftWare-Wettel.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-Cloud-Word-89",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Cloud-Word.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2004-Flow-History-90",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2004-Flow-History.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2003-Pebble-HierarchyData-91",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2003-Pebble-HierarchyData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2014-River-dataStatistic-92",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2014-River-dataStatistic.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-ScreenShot-Medical-93",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-ScreenShot-Medical.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-MultiRing-TimeSeries-94",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-MultiRing-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Clock-Time-95",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Clock-Time.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-UndirectedRootedTree-HierachyData-96",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-UndirectedRootedTree-HierachyData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2017-NodeLink-Relation-97",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2017-NodeLink-Relation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2015-Piling-TimeSeries-98",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2015-Piling-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2015-StreamFeather-Vector-99",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2015-StreamFeather-Vector.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2015-Temperature-Flood-100",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2015-Temperature-Flood.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2014-Tangram-VisitMuseum-101",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2014-Tangram-VisitMuseum.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2014-Bar-Fraction-102",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2014-Bar-Fraction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2014-Map-Recommadation-103",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2014-Map-Recommadation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2014-Clock-SpatioTemporal-104",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2014-Clock-SpatioTemporal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2013-Light-Variation-105",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Light-Variation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2013-Sketching-Geological-106",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Sketching-Geological.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-Glyph-Sports-107",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Glyph-Sports.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-Clock-TimeSeries-108",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Clock-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-RubbleBand-Path-109",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-RubbleBand-Path.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-BrickAndRibbon-Subset-110",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-BrickAndRibbon-Subset.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-DyeAdvection-FlowVolumes-111",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-DyeAdvection-FlowVolumes.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2008-WeatherVane-Direction-112",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2008-WeatherVane-Direction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2021-Flow-FluidAndFlow-113",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2021-Flow-FluidAndFlow.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2021-Map-Text-114",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2021-Map-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-Tree-MergeHierarchies-115",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-Tree-MergeHierarchies.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-HandleBar-Interaction-116",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-HandleBar-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-IcicleExtend-Hierachy-117",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-IcicleExtend-Hierachy.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2019-TrafficLight-Color-118",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2019-TrafficLight-Color.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-ClockAndCalendar-AuditLog-119",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-ClockAndCalendar-AuditLog.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Wedge-Anomaly-120",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Wedge-Anomaly.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Radar-Monitor-121",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Radar-Monitor.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    /***************************************************** 122在下面几个************************************************** */
    new Content(
        "2017-Retractor-DataFeature-123",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2017-Retractor-DataFeature.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2017-TrapezoidGlyph-EventFeaure-124",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2017-TrapezoidGlyph-EventFeaure.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2017-Ring-Density-125",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2017-Ring-Density.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2010-Table-MataData-122",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2010-Table-MataData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2015-Lens-Interaction-126",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2015-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2013-NodeLink-DynamicGraphs-127",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-NodeLink-DynamicGraphs.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2013-NodelinkHeatmapRadial-Trace-128",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-NodelinkHeatmapRadial-Trace.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2013-Lens-Interaction-129",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2012-Map-DataSetRelation-130",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2012-Map-DataSetRelation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-MetroMap-Set-131",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-MetroMap-Set.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-FingerMove-Interaction-132",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-FingerMove-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-Ballon-Process-133",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-Ballon-Process.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-Drawing-Interaction-134",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-Drawing-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2020-Caricature-Encode-135",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2020-Caricature-Encode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    /****************************************没有编号********************************************  */
    new Content(
        "2019-Radar-Direction",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2019-Radar-Direction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2019-Zipper-Path-136",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2019-Zipper-Path.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2019-CaricatureBook-Interaction-137",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2019-CaricatureBook-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Weather-BloodGlucose-138",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Weather-BloodGlucose.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Grasp-Interaction-140",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Grasp-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-River-Text-141",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-River-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Desktop-Interaction-142",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Desktop-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Canvas-Interaction-143",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Canvas-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Bookshelf-Data-144",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Bookshelf-Data.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Clock-Map-145",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Clock-Map.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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
    new Content(
        "2018-Sculptor-Interaction-146",//id
        "",//name
        //title
        "",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Sculptor-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["","","",""],
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