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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        ["Form","R",["Text","Graph"],"Map"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/8585638",//url
        //publication
        "2017 IEEE Conference on Visual Analytics Science and Technology (VAST)",
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
        ["Form","R",["Text"],"Wheel"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/7883513",//url
        //publication
        "2016 IEEE Conference on Visual Analytics Science and Technology (VAST)",
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
        ["Form","Z",["Text","Time","Graph"],"Flow"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/7883511",//url
        //publication
        "2016 IEEE Conference on Visual Analytics Science and Technology (VAST)",
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
        ["Form","Z",["Text"],"Flow"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/7192685",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 22, Issue: 1, Jan. 31 2016)",
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
        ["Form","F",["Text"],"Band"],
        //application 应用场景
        ["DigtalHumanities","SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Locate","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/7042496",//url
        //publication
        "2014 IEEE Conference on Visual Analytics Science and Technology (VAST)",
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
        ["Form","Z",["Text"],"Bubble"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
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
        ["Form","Z",["Text","Time"],"Sedimentation"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6634152",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
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
        ["Interaction","R",["Volume"],"Kite"],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://www.computer.org/csdl/proceedings-article/ldav/2013/06675159/12OmNzFv4dw",//url
        //publication
        "2013 IEEE Symposium on Large-Scale Data Analysis and Visualization (LDAV)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-StickyNote-Interaction-18",//id
        "StickyNote(2013)",//name
        //title
        "The Impact of Physical Navigation on Spatial Organization for Sensemaking",
        "2013",//year
        //authors
        "Christopher Andrews and Chris North",
        //picturePath
        "../picture100/2013-StickyNote-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Text"],"StickyNote"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6634176",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-MusicScore-CNVData-19",//id
        "MusicScore(2013)",//name
        //title
        "Leveraging Wall-sized High-Resolution Displays for Comparative Genomics Analyses of Copy Number Variation",
        "2013",//year
        //authors
        "Roy A. Ruddle, Waleed Fateen, Darren Treanor Peter Sondergeld, Phil Quirke",
        //picturePath
        "../picture100/2013-MusicScore-CNVData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Volume"],"MusicScore"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/6664351",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Shutter-Interaction-20",//id
        "Shutter(2013)",//name
        //title
        "MoClo Planner:Interactive Visualization for Modular Cloning Bio-Design",
        "2013",//year
        //authors
        "Orit Shaer, Consuelo Valdes, Sirui Liu, Kara Lu, Traci L. Haddock, Swapnil Bhatia, Douglas Densmore, Robert Kincaid",
        //picturePath
        "../picture100/2013-Shutter-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Volume"],"Shutter"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6664347",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Bubble-DataExplore-21",//id
        "Bubble(2013)",//name
        //title
        "HumMod Browser: An Exploratory Visualization Tool for the Analysis of Whole-Body Physiology Simulation Data",
        "2013",//year
        //authors
        "Keqin Wu Jian Chen* William A. Pruett Robert L. Hester",
        //picturePath
        "../picture100/2013-Bubble-DataExplore.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Volume","Graph"],"Bubble"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6664352",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Lines-TimeSeries-22",//id
        "Lines(2013)",//name
        //title
        "HumMod Browser: An Exploratory Visualization Tool for the Analysis of Whole-Body Physiology Simulation Data",
        "2013",//year
        //authors
        "Keqin Wu Jian Chen* William A. Pruett Robert L. Hester",
        //picturePath
        "../picture100/2013-Lines-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","F",["Event","Time"],"Line"],
        //application 应用场景
        ["BiologyMedical","NetworkSecurity"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6664352",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Lines-EntitiesbyTimes-23",//id
        "Lines(2013)",//name
        //title
        "StoryFlow: Tracking the Evolution of Stories",
        "2013",//year
        //authors
        "Shixia Liu, Senior Member, IEEE, Yingcai Wu, Member, IEEE, Enxun Wei, Mengchen Liu, and Yang Liu",
        //picturePath
        "../picture100/2013-Lines-EntitiesbyTimes.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","F",["Event","Time"],"Lines"],
        //application 应用场景
        ["NetworkSecurity","DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Distance","Hybrid"],
        //task 任务/功能
        ["Locate","Explore","Present"],
        "https://ieeexplore.ieee.org/abstract/document/6634164",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Clock-TimeSeries-24",//id
        "Clock(2013)",//name
        //title
        "Evaluation of Filesystem Provenance Visualization Tools",
        "2014",//year
        //authors
        "Michelle A. Borkin, Student Member, IEEE, Chelsea S. Yeh, Madelaine Boyd, Peter Macko,",
        //picturePath
        "../picture100/2013-Clock-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text","Time"],"Clock"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6634189",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-TimeLine-SocialMedia-25",//id
        "TimeLine(2013)",//name
        //title
        "Visual Analysis of Topic Competition on Social Media ",
        "2013",//year
        //authors
        "Panpan Xu, Yingcai Wu, Enxun Wei, Tai-Quan Peng,Shixia Liu,Jonathan J. H. Zhu, and Huamin Qu",
        //picturePath
        "../picture100/2013-TimeLine-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","F",["Text","Graph","Time"],"Line"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Compare"],
        "https://ieeexplore.ieee.org/abstract/document/6634134",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-DirectManipulation-Interaction-26",//id
        "DirectManipulation(2013)",//name
        //title
        "Interactive Exploration of Implicit and Explicit Relations in Faceted Datasets",
        "2013",//year
        //authors
        "Jian Zhao, Christopher Collins, Fanny Chevalier, and Ravin Balakrishnan",
        //picturePath
        "../picture100/2013-DirectManipulation-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","D",["Text"],"DirectManipulation"],
        //application 应用场景
        ["Academic","DigtalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6634163",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Map-SocialMedia-27",//id
        "Map(2013)",//name
        //title
        "ScatterBlogs2: Real-Time Monitoring of Microblog Messages Through User-Guided Filtering",
        "2013",//year
        //authors
        "",
        //picturePath
        "../picture100/2013-Map-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Map",["Text","Time"],"Map"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/6634195",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Glyps-Biology-28",//id
        "Glyps(2012)",//name
        //title
        "Taxonomy-Based Glyph Design—with a Case Study on Visualizing Workflows of Biological Experiments",
        "",//year
        //authors
        "Eamonn Maguire, Philippe Rocca-Serra, Susanna-Assunta Sansone, Jim Davies, and Min Chen",
        //picturePath
        "../picture100/2012-Glyps-Biology.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","K",["MetaData"],"Glyps"],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Derive","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327266",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-SunFlower-SocialMedia-29",//id
        "Flower(2012)",//name
        //title
        "Whisper: Tracing the Spatiotemporal Process of Information Diffusion in Real Time",
        "2012",//year
        //authors
        "Nan Cao, Yu-Ru Lin, Xiaohua Sun, David Lazer, Shixia Liu, and Huamin Qu",
        //picturePath
        "../picture100/2012-SunFlower-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text","Time"],"Flower"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Topology","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327271",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Flow-Analysis-30",//id
        "Flow(2012)",//name
        //title
        "Visualizing Flow of Uncertainty through Analytical Processes",
        "2012",//year
        //authors
        "Yingcai Wu, Member, IEEE, Guo-Xun Yuan, and Kwan-Liu Ma, Fellow, IEEE",
        //picturePath
        "../picture100/2012-Flow-Analysis.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["MetaDdata"],"Flow"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327258",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Arrows-PositionAndDirection-31",//id
        "Arrows(2012)",//name
        //title
        "Visualization of Electrostatic Dipoles in Molecular Dynamics of Metal Oxides",
        "2012",//year
        //authors
        "Sebastian Grottel, Philipp Beck, Christoph M¨uller, Guido Reina, Johannes Roth, Hans-Rainer Trebin, and Thomas Ertl",
        //picturePath
        "../picture100/2012-Arrows-PositionAndDirection.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","",[""],""],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327210",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Spatial-Interaction-32",//id
        "Spatial(2012)",//name
        //title
        "Understanding Pen and Touch Interaction for Data Exploration on Interactive Whiteboards",
        "2012",//year
        //authors
        "Jagoda Walny, Bongshin Lee, Paul Johns, Nathalie Henry Riche, and Sheelagh Carpendale",
        //picturePath
        "../picture100/2012-Spatial-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","","",""],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327284",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Slot-Tile-Drag-Interaction-33",//id
        "Slot-Tile-Drag(2012)",//name
        //title
        "The DeepTree Exhibit: Visualizing the Tree of Life to Facilitate Informal Learning",
        "2012",//year
        //authors
        "Florian Block, Michael S. Horn, Brenda Caldwell Phillips,Judy Diamond, E. Margaret Evans,and Chia Shen",
        //picturePath
        "../picture100/2012-Slot-Tile-Drag-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","D",["Hierachy"],"Drag"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327285",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-DashBoard-VideoSpeed-34",//id
        "DashBoard(2012)",//name
        //title
        "Evaluation of Fast-Forward Video Visualization",
        "212",//year
        //authors
        "Markus H¨oferlin, Kuno Kurzhals, Benjamin H¨oferlin, Gunther Heidemann, and Daniel Weiskopf",
        //picturePath
        "../picture100/2012-DashBoard-VideoSpeed.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Veio"],"DashBoard"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327214",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Flow-Text-35",//id
        "Flow(2012)",//name
        //title
        "LeadLine: Interactive Visual Analysis of Text Data through Event Identifification and Exploration",
        "2012",//year
        //authors
        "Wenwen Dou, Xiaoyu Wang, Drew Skau, William Ribarsky, and Michelle X. Zhou",
        //picturePath
        "../picture100/2012-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text","Graph"],"Flow"],
        //application 应用场景
        ["DigitalHumanities","NetworkSecurity","SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6400485",//url
        //publication
        "2012 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Painting-MachineLearning-36",//id
        "Painting(2005)",//name
        //title
        "An Intelligent System Approach to HigherDimensional Classification of Volume Data",
        "2005",//year
        //authors
        "Fan-Yin Tzeng, Eric B. Lum, Member, IEEE, and Kwan-Liu Ma, Senior Member, IEEE",
        //picturePath
        "../picture100/2005-Painting-MachineLearning.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","D",["Volume"],"Painting"],
        //application 应用场景
        ["SoftwareEngineer","NetworkSecurity"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Record"],
        "https://ieeexplore.ieee.org/abstract/document/1407860",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 11, Issue: 3, May-June 2005)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Wheel-MultiData-37",//id
        "Wheel(2012)",//name
        //title
        "Reinventing the Contingency Wheel: Scalable Visual Analytics of Large Categorical Data",
        "2012",//year
        //authors
        "Bilal Alsallakh, Wolfgang Aigner, Silvia Miksch, and M. Eduard Gr¨oller",
        //picturePath
        "../picture100/2012-Wheel-MultiData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["MetaData"],"Wheel"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/6327291",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Lens-Interaction-38",//id
        "Lens(2012)",//name
        //title
        "Living Liquid: Design and Evaluation of an Exploratory Visualization Tool for Museum Visitors",
        "2012",//year
        //authors
        "Joyce Ma, Isaac Liao, Kwan-Liu Ma, Fellow, and Jennifer Frazier",
        //picturePath
        "../picture100/2012-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["MetaData","Volume"],"Lens"],
        //application 应用场景
        ["DititalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327286",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Filter-Flow-Interaction-39",//id
        "Filter(2012)",//name
        //title
        "Beyond Mouse and Keyboard: Expanding Design Considerations for Information Visualization Interactions",
        "2012",//year
        //authors
        "Bongshin Lee, Petra Isenberg, Nathalie Henry Riche, and Sheelagh Carpendale",
        //picturePath
        "../picture100/2012-Filter-Flow-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","D",["Spatial"],"Filtering"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327275",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Film-Strip-VedioFrame-40",//id
        "Film-Strip(2012)",//name //幻灯片
        //title
        "AlVis: Situation Awareness in the Surveillance of Road Tunnels",
        "2012",//year
        //authors
        "Harald Piringer∗，Matthias Buchetics†，Rudolf Benedik‡",
        //picturePath
        "../picture100/2012-Film-Strip-VedioFrame.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Vedio"],"Film-Strip"],
        //application 应用场景
        ["Geography"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/6400556",//url
        //publication
        "2012 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Paper-on-Table-Interaction-41",//id
        "Paper-on-Table(2012)",//name
        //title
        "Interaction Support for Visual Comparison Inspired by Natural Behavior",
        "2012",//year
        //authors
        "Christian Tominski, Camilla Forsell, and Jimmy Johansson",
        //picturePath
        "../picture100/2012-Paper-on-Table-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Text"],"Paper"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Explore","Compare"],
        "https://ieeexplore.ieee.org/abstract/document/6327278",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Light-Surgery-42",//id
        "Light(2011)",//name
        //title
        "Crepuscular Rays for Tumor Accessibility Planning",
        "2011",//year
        //authors
        "Rostislav Khlebnikov, Bernhard Kainz, Judith Muehl, and Dieter Schmalstieg, Member, IEEE",
        //picturePath
        "../picture100/2011-Light-Surgery.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Volume"],"Light"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/6064981",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-ParallelCoordinate-Text-43",//id
        "ParallelCoordinate(2011)",//name
        //title
        "ParallelTopics: A Probabilistic Approach to Exploring Document Collections",
        "2011",//year
        //authors
        "Wenwen Dou∗, Xiaoyu Wang†,Remco Chang‡,William Ribarsky§",
        //picturePath
        "../picture100/2011-ParallelCoordinate-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","K",["Text"],"ParallelCoordinate"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6102461",//url
        //publication
        "2011 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Fog-Uncertain-44",//id
        "Fog(2011)",//name
        //title
        "Visualizing Virus Population Variability From Next Generation Sequencing Data",
        "2011",//year
        //authors
        "",
        //picturePath
        "../picture100/2011-Fog-Uncertain.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Volume"],"Fog"],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Present","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6094058",//url
        //publication
        "2011 IEEE Symposium on Biological Data Visualization (BioVis).",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-HeatMap-Event-45",//id
        "HeatMap(2011)",//name
        //title
        "Visualizing Virus Population Variability From Next Generation Sequencing Data",
        "2011",//year
        //authors
        "Michael Correll∗ , Subhadip Ghosh† , David O’Connor‡ , Michael Gleicher§",
        //picturePath
        "../picture100/2011-HeatMap-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Event"],"HeatMap"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6094058",//url
        //publication
        "2011 IEEE Symposium on Biological Data Visualization (BioVis).",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Flow-Text-46",//id
        "Flow(2011)",//name
        //title
        "TextFlow: Towards Better Understanding of Evolving Topics in Text",
        "2011",//year
        //authors
        "Weiwei Cui, Shixia Liu, Member, IEEE, Li Tan, Conglei Shi, Yangqiu Song, Zekai J. Gao, Xin Tong, and Huamin Qu",
        //picturePath
        "../picture100/2011-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text"],"Flow"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/6065008",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Slab-probability-47",//id
        "Slab2011()",//name
        //title
        "Fiber Stippling: An Illustrative Rendering for Probabilistic Diffusion Tractography",
        "2011",//year
        //authors
        "Mathias Goldau∗,Alexander Wiebel†,Nico Stephan Gorbach‡,Corina Melzer§,Mario Hlawitschka¶,Gerik Scheuermannk,Marc Tittgemeyer∗∗",
        //picturePath
        "../picture100/2011-Slab-probability.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","",[""],""],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/6094044",//url
        //publication
        "2011 IEEE Symposium on Biological Data Visualization (BioVis).",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Seesaw-Comparion-48",//id
        "Seesaw(2011)",//name
        //title
        "Asymmetric Relations in Longitudinal Social Networks",
        "2011",//year
        //authors
        "Ulrik Brandes and Bobo Nick",
        //picturePath
        "../picture100/2011-Seesaw-Comparion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["MetaData"],"Seesaw"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Compare"],
        "https://ieeexplore.ieee.org/abstract/document/6064994",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-TopoMap-MultiData-49",//id
        "TopologyMAP(2011)",//name
        //title
        "Topological Spines: A Structure-Preserving Visual Representation of Scalar Fields",
        "2011",//year
        //authors
        "Carlos D. Correa, Member, Peter Lindstrom,  and Peer-Timo Bremer",
        //picturePath
        "../picture100/2011-TopoMap-MultiData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["MetaData"],"Map"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Discover"],
        "https://ieeexplore.ieee.org/abstract/document/6064947",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Flow-Text-50",//id
        "Flow(2010)",//name
        //title
        "TIARA: A Visual Exploratory Text Analytic System",
        "2010",//year
        //authors
        "Furu Wei † , Shixia Liu † , Yangqiu Song †, Shimei Pan ‡, Michelle X. Zhou §, Weihong Qian † , Lei Shi † , Li Tan † and Qiang Zhang †",
        //picturePath
        "../picture100/2010-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text"],"Flow"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Summarize"],
        "https://dl.acm.org/doi/abs/10.1145/1835804.1835827",//url
        //publication
        "",/*************************************没找到publication*********************************************/
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Cartoon-QueryOrTemporal-51",//id
        "Cartoon(2010)",//name
        //title
        "Interactive Querying of Temporal Data Using A Comic Strip Metaphor ∗",
        "2010",//year
        //authors
        "Jing Jin, Pedro Szekely†",
        //picturePath
        "../picture100/2010-Cartoon-QueryOrTemporal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Time"],"Cartoon"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/5652890",//url
        //publication
        "2010 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-MapTerrian-Text-52",//id
        "Terrian Map(2010)",//name
        //title
        "Two-stage Framework for a Topology-Based Projection and Visualization of Classifified Document Collections",
        "",//year
        //authors
        "Patrick Oesterling,Gerik Scheuermann∗ ,Sven Teresniak ,Gerhard Heyer†,Steffen Koch Thomas Ertl‡,Gunther H. Weber§",
        //picturePath
        "../picture100/2010-MapTerrian-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text","MetaData"],"Map"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Distance","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/5652940",//url
        //publication
        "2010 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Flow-MultiText-53",//id
        "Flow(2010)",//name
        //title
        "Understanding Text Corpora with Multiple Facets",
        "2010",//year
        //authors   
        "Lei Shi ,Furu Wei ,Shixia Liu, Li Tan ,Xiaoxiao Lian∗,Michelle X. Zhou†",
        //picturePath
        "../picture100/2010-Flow-MultiText.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text",""],""],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/5652931",//url
        //publication
        "2010 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Triangle-Opinion-54",//id
        "Triangle(2010)",//name
        //title
        "OpinionSeer: Interactive Visualization of Hotel Customer Feedback",
        "2010",//year
        //authors
        "Yingcai Wu, Furu Wei, Shixia Liu, Norman Au, Weiwei Cui, Hong Zhou, and Huamin Qu",
        //picturePath
        "../picture100/2010-Triangle-Opinion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","K",["Text"],"Triangle"],
        //application 应用场景
        ["DigitalHumanities","SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/5613449",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 16, Issue: 6, Nov.-Dec. 2010)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-ParallelCoordinate-ClusterData-55",//id
        "ParallelCoordinate(2010)",//name
        //title
        "Comparative Analysis of Multidimensional, Quantitative Data",
        "2010",//year
        //authors
        "Alexander Lex, Marc Streit, Christian Partl, Karl Kashofer, and Dieter Schmalstieg",
        //picturePath
        "../picture100/2010-ParallelCoordinate-ClusterData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","K",[""],"ParallelCoordinate"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Compare"],
        "https://ieeexplore.ieee.org/abstract/document/5613440",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 16, Issue: 6, Nov.-Dec. 2010)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Flower-WebData-56",//id
        "Flower(2011)",//name
        //title
        "Visualizing Web Search Results Using Glyphs:Design and Evaluation of a Flower Metaphor",
        "2011",//year
        //authors
        "MICHAEL CHAU",
        //picturePath
        "../picture100/2011-Flower-WebData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text"],"Flower"],
        //application 应用场景
        ["NetworkScruity"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://dl.acm.org/doi/abs/10.1145/1929916.1929918",//url
        //publication
        "",/****************************************no poblication find************************************************* */
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-TopologicalLandscape-ScalarFunction-57",//id
        "Topological Landscape(2007)",//name
        //title
        "Topological Landscapes: A Terrain Metaphor for Scientific Data",
        "2007",//year
        //authors
        "Gunther H. Weber, Peer-Timo Bremer and Valerio Pascucci",
        //picturePath
        "../picture100/2007-TopologicalLandscape-ScalarFunction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["MetaData"],"Landscape"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Discover","Explore"],
        "https://ieeexplore.ieee.org/abstract/document/4376169",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 13, Issue: 6, Nov.-Dec. 2007)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-FlowRiver-Video-58",//id
        "FlowRiver(2007)",//name
        //title
        "NewsLab: Exploratory Broadcast News Video Analysis",
        "2007",//year
        //authors
        "Mohammad Ghoniem∗,Dongning Luo†,Jing Yang‡,William Ribarsky§",
        //picturePath
        "../picture100/2007-FlowRiver-Video.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Video"],"Flow"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/4389005",//url
        //publication
        "2007 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-Lens-Interaction-59",//id
        "Lens(2007)",//name
        //title
        "NewsLab: Exploratory Broadcast News Video Analysis",
        "2007",//year
        //authors
        "Mohammad Ghoniem∗,Dongning Luo†,Jing Yang‡,William Ribarsky§",
        //picturePath
        "../picture100/2007-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Video"],"Lens"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/4389005",//url
        //publication
        "2007 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-Map-WebPrefix-60",//id
        "Map(2006)",//name
        //title
        "Topographic Visualization of Prefix Propagation in the Internet",
        "2006",//year
        //authors
        "Pier Francesco Cortese, Giuseppe Di Battista, Antonello Moneta,Maurizio Patrignani, and Maurizio Pizzonia",
        //picturePath
        "../picture100/2006-Map-WebPrefix.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text"],"Map"],
        //application 应用场景
        ["NetworkScurity"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/4015423",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-GpuTools-Medical-61",//id
        "GpuTools(2006)",//name
        //title
        "Feature Aligned Volume Manipulation for Illustration and Visualization",
        "2006",//year
        //authors
        "Carlos D. Correa, Deborah Silver and Min Chen",
        //picturePath
        "../picture100/2006-GpuTools-Medical.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Volume"],"GpuTools"],
        //application 应用场景
        ["HCI","BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/4015466",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-SpaceFilling-Interaction-62",//id
        "SpaceFilling(2006)",//name
        //title
        "FacetMap: A Scalable Search and Browse Visualization",
        "2006",//year
        //authors
        "Greg Smith, Mary Czerwinski, Brian Meyers, Daniel Robbins, George Robertson, Desney S. Tan",
        //picturePath
        "../picture100/2006-SpaceFilling-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","K",["Text"],"SpaceFilling"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/4015432",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-Lens-Interaction-63",//id
        "Lens(2006)",//name
        //title
        "ClearView:An Interactive Context Preserving Hotspot Visualization Technique",
        "2006",//year
        //authors
        "Jens Kr¨uger, Jens Schneider, R¨udiger Westermann",
        //picturePath
        "../picture100/2006-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Volume"],"Lens"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/4015450",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-SolarSystem-Interaction-64",//id
        "Solar System(2006)",//name
        //title
        "A Novel Visualization Model for Web Search Results",
        "2006",//year
        //authors
        "Tien N. Nguyen, Member, IEEE and Jin Zhang",
        //picturePath
        "../picture100/2006-SolarSystem-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Z",["Text"],"SolarSystem"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/4015455",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-Splitting-Interaction-65",//id
        "Splitting(2006)",//name
        //title
        "Exploded Views for Volume Data",
        "2006",//year
        //authors
        "Stefan Bruckner and M. Eduard Gr¨oller,Member, IEEE Computer Society",
        //picturePath
        "../picture100/2006-Splitting-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","D",["Volume"],""],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/4015467",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-MapAndTimeline-Analysis-66",//id
        "Map and Timeline(2006)",//name
        //title
        "Interactive Visual Synthesis of Analytic Knowledge",
        "2006",//year
        //authors
        "David Gotz∗ ,Michelle X. Zhou†, Vikram Aggarwal‡",
        //picturePath
        "../picture100/2006-MapAndTimeline-Analysis.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","F",["Text","Time"],"Line"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/4035747",//url
        //publication
        "2006 IEEE Symposium On Visual Analytics Science And Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-ParallelSet-Classify-67",//id
        "ParallelSet(2005)",//name
        //title
        "Parallel Sets: Visual Analysis of Categorical Data Visualization",
        "2005",//year
        //authors
        "Carlos D. Correa, Deborah Silver and Min Chen",
        //picturePath
        "../picture100/2005-ParallelSet-Classify.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","K",["MetaData"],"ParallelSet"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/1532139",//url
        //publication
        "IEEE Symposium on Information Visualization, 2005. INFOVIS 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Piano-Signal-68",//id
        "Piano(2005)",//name
        //title
        "The Visible Radio: Process Visualization of a Software-Defined Radio",
        "2005",//year
        //authors
        "Matthew Hall, Alex Betts, Donna Cox, David Pointer, Volodymyr Kindratenko",
        //picturePath
        "../picture100/2005-Piano-Signal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Time"],"Piano"],
        //application 应用场景
        ["CommunicationEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1532791",//url
        //publication
        "VIS 05. IEEE Visualization, 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Camara-Interaction-69",//id
        "Camara(2005)",//name
        //title
        "Visualization in the Einstein Year 2005: A Case Study on Explanatory and Illustrative Visualization of Relativity and Astrophysics",
        "2005",//year
        //authors
        "Daniel Weiskopf∗, Marc Borchers, Thomas Ertl, Martin Falk, Oliver Fechtig, Regine Frank, Frank Grave,Andreas King, Ute Kraus, Thomas M¨uller, Hans-Peter Nollert, Isabel Rica Mendez, Hanns Ruder, Tobias Schafhitzel, Sonja Sch¨ar, Corvin Zahn, Michael Zatloukal",
        //picturePath
        "../picture100/2005-Camara-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","",[""],""],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/1532845",//url
        //publication
        "VIS 05. IEEE Visualization, 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Lens-Interaction-70",//id
        "Lens(2005)",//name
        //title
        "The Magic Volume Lens: An Interactive Focus+Context Technique for Volume Rendering",
        "2005",//year
        //authors
        "Lujin Wang Ye Zhao Klaus Mueller Arie Kaufman∗",
        //picturePath
        "../picture100/2005-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Volume"],"Lens"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/1532818",//url
        //publication
        "VIS 05. IEEE Visualization, 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-TabbedPane-Interaction-71",//id
        "TabbedPane(2005)",//name
        //title
        "Visualizing Coordination In Situ",
        "2005",//year
        //authors
        "Chris Weaver∗",
        //picturePath
        "../picture100/2005-TabbedPane-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","F",["MetaData"],"TabbedPane"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1532143",//url
        //publication
        "IEEE Symposium on Information Visualization, 2005. INFOVIS 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-X-Ray-Network-72",//id
        "X-Ray(2005)",//name
        //title
        "Vizster: Visualizing Online Social Networks",
        "2005",//year
        //authors
        "Jeffrey Heer,danah boyd",
        //picturePath
        "../picture100/2005-X-Ray-Network.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Graph"],"X-Ray"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/1532126",//url
        //publication
        "IEEE Symposium on Information Visualization, 2005. INFOVIS 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""], 
            Feature:[""]
        }
    ),
    new Content(
        "2004-WrappedLine-DNA-73",//id
        "WrappedLine(2004)",//name
        //title
        "PQuad: Visualization of Predicted Peptides and Proteins",
        "2004",//year
        //authors
        "Susan L. Havre, Mudita Singhal, Deborah A. Payne ,Bobbie-Jo M. Webb-Robertson",
        //picturePath
        "../picture100/2004-WrappedLine-DNA.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["form","F",["Volume"],"Line"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1372232",//url
        //publication
        "IEEE Visualization 2004",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Telescope-Interaction-74",//id
        "Telescope(2004)",//name
        //title
        "Evaluating a System for Interactive Exploration of Large, Hierarchically Structured Document Repositories",
        "2004",//year
        //authors
        "Michael Granitzer+,Wolfgang Kienreich+ ,Vedran Sabol + ,Keith Andrews*,Werner Klieber +",
        //picturePath
        "../picture100/2004-Telescope-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["Text"],"Telescope"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1382900",//url
        //publication
        "IEEE Symposium on Information Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Geography-Event-75",//id
        "Geography(2004)",//name
        //title
        "Artifacts of the Presence Era: Using Information Visualization to Create an Evocative Souvenir",
        "2004",//year
        //authors
        "Fernanda B. Viégas*,Ethan Perry*,Ethan Howe*,Judith Donath*",
        //picturePath
        "../picture100/2004-Geography-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Event"],"Map"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/1382897",//url
        //publication
        "IEEE Symposium on Information Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Pionter-Interaction-76",//id
        "Pionter(2004)",//name
        //title
        "Immersive Design of DNA Molecules with a Tangible Interface",
        "2004",//year
        //authors
        "Steven Schkolne,Hiroshi Ishii,Peter Schröder",
        //picturePath
        "../picture100/2004-Pionter-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","R",["volume"],"Pionter"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/1372201",//url
        //publication
        "IEEE Visualization 2004",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-Book-Anatomy-77",//id
        "Book(2003)",//name
        //title
        "Using Deformations for Browsing Volumetric Data",
        "2003",//year
        //authors
        "Michael J. McGuffin∗ ,Liviu Tancau† ,Ravin Balakrishnan‡",
        //picturePath
        "../picture100/2003-Book-Anatomy.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Volume"],"Book"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/1250400",//url
        //publication
        "IEEE Visualization, 2003. VIS 2003.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-City-SoftWare-78",//id
        "City(2011)",//name
        //title
        "A 3D Metaphor for Software Production Visualization",
        "2011",//year
        //authors
        "Thomas Panas, Rebecca Berrigan, John Grundy",
        //picturePath
        "../picture100/2011-City-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["MetaData","Time"],"City"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1217996",//url
        //publication
        "Proceedings on Seventh International Conference on Information Visualization, 2003. IV 2003.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Landscape-SoftWare-79",//id
        "Landscape(2004)",//name
        //title
        "Software LandscapesVisualizing the Structure of Large Software Systems",
        "2004",//year
        //authors
        "Michael Balzer, Andreas Noack,Oliver Deussen,Claus Lewerentz",
        //picturePath
        "../picture100/2004-Landscape-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text"],"Landscape"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "http://kops.uni-konstanz.de/handle/123456789/6049",//url
        //publication
        "",/************************************no publication find********************************************* */
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-SolarSystem-SoftWare-Yang-80",//id
        "SolarSystem(2003)",//name
        //title
        "Software Metrics and Visualisation",
        "2003",//year
        //authors
        "Hong Yul Yang",
        //picturePath
        "../picture100/2003-SolarSystem-SoftWare-Yang.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text"],"SolarSystem"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.135.7600&rep=rep1&type=pdf",//url
        //publication
        "",/*************************no publication find********************** */
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-CityAndLandscape-SoftWare-Vuduc-81",//id
        "City and Landscape(2003)",//name
        //title
        "Communicating software  architecture using a unifified single-view visualization",
        "2003",//year
        //authors
        "Richard (Rich) Vuduc",
        //picturePath
        "../picture100/2003-CityAndLandscape-SoftWare-Vuduc.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text"],"City"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4276318",//url
        //publication
        "12th IEEE International Conference on Engineering Complex Computer Systems (ICECCS 2007)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-City-Software-Alam-82",//id
        "City(2007)",//name
        //title
        "EvoSpaces Visualization Tool: Exploring Software Architecture in 3D",
        "2007",//year
        //authors
        "Sazzadul Alam and Philippe Dugerdil",
        //picturePath
        "../picture100/2007-City-Software-Alam.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text"],"City"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4400173",//url
        //publication
        "14th Working Conference on Reverse Engineering (WCRE 2007)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-City-SoftWare-Method-83",//id
        "City(2008)",//name
        //title
        "Visually Localizing Design Problems with Disharmony Maps",
        "2008",//year
        //authors
        "Wettel, Richard and Lanza, Michele",
        //picturePath
        "../picture100/2008-City-SoftWare-Method.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text"],"City"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://www.si.usi.ch/assets/publications/conf/softvis/softvis2008/WettelL08.pdf",//url
        //publication
        "Proceedings of the 4th ACM Symposium on Software Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-Flow-Software-Code-84",//id
        "Flow(2008)",//name
        //title
        "Code Flows: Visualizing Structural Evolution of Source Code",
        "2008",//year
        //authors
        "Telea, Alexandru and Auber, David",
        //picturePath
        "../picture100/2008-Flow-Software-Code.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text"],"Flow"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2008.01214.x",//url
        //publication
        "Computer Graphics Forum",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-TimeLine-SoftWareCode-85",//id
        "TimeLine(2008)",//name
        //title
        "Visual Exploration of Large-Scale System Evolution",
        "2008",//year
        //authors
        "Richard Wettel and Michele Lanza",
        //picturePath
        "../picture100/2008-TimeLine-SoftWareCode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text","Time"],"Flow"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4656413",//url
        //publication
        "2008 15th Working Conference on Reverse Engineering",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-Flow-SourceCode-86",//id
        "Flow(2008)",//name
        //title
        "Visual Comparison of Hierarchically Organized Data",
        "2008",//year
        //authors
        "Danny Holten and Jarke J. van Wijk",
        //picturePath
        "../picture100/2008-Flow-SourceCode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text","Time"],"Flow"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize","Enjoy","Locate"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2008.01205.x",//url
        //publication
        "Computer Graphics Forum",//no publication find
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-CityMap-SoftWare-87",//id
        "CityMap(2008)",//name
        //title
        "Visual Exploration of Large-Scale System Evolution",
        "2008",//year
        //authors
        "Richard Wettel and Michele Lanza",
        //picturePath
        "../picture100/2008-CityMap-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text"],"City"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4656413",//url
        //publication
        "2008 15th Working Conference on Reverse Engineering",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-City-SoftWare-Wettel-88",//id
        "City(2008)",//name
        //title
        "Visually Localizing Design Problems with Disharmony Maps",
        "2008",//year
        //authors
        "Richard Wettel∗ and Michele Lanza†",
        //picturePath
        "../picture100/2008-City-SoftWare-Wettel.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Text"],"City"],
        //application 应用场景
        ["SoftwareEngineer"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://www.si.usi.ch/assets/publications/conf/softvis/softvis2008/WettelL08.pdf",//url
        //publication
        "Proceedings of the 4th ACM Symposium on Software Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2009-Cloud-Word-89",//id
        "Cloud(2009)",//name
        //title
        "Participatory visualization with wordle",
        "2009",//year
        //authors
        "Fernanda B. Viégas, Martin Wattenberg, and Jonathan Feinberg",
        //picturePath
        "../picture100/2012-Cloud-Word.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Text"],"Cloud"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/5290722",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 15, Issue: 6, Nov.-Dec. 2009)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Flow-History-90",//id
        "Flow(2004)",//name
        //title
        "Studying Cooperation and Conflict between Authors with history flow Visualizations",
        "2004",//year
        //authors
        "Fernanda B. Viégas, Martin Wattenberg,Kushal Dave",
        //picturePath
        "../picture100/2004-Flow-History.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Z",["Time"],"Flow"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize","Present"],
        "https://flosshub.org/sites/flosshub.org/files/viegaswattenbergdave.pdf",//url
        //publication
        "Proceedings of the SIGCHI conference on Human factors in computing systems",
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
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