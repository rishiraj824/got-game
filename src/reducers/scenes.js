export default [
        {
            "id": 2,
            "desc": "The Oracle offers property insurance in exchange for  100 coins",
            "immunity_type": "PROPERTY",
            "url": "https://storage.googleapis.com/assetlib/aac787f4-4e4d-4aa5-b257-20f80cc6d989.png",
            "opt1": {
                "desc": "Buy the policy",
                "action": "BUY_IMMUNITY",
            },
            "opt2": {
                "desc": "Just Ignore",
                "action": "SKIP"
            }
        },
        {
            "id": 17,
            "desc": "The Oracle offers fire insurance in exchange for 500 coins",
            "immunity_type": "FIRE",
            "url": "https://storage.googleapis.com/assetlib/aac787f4-4e4d-4aa5-b257-20f80cc6d989.png",
            "opt1": {
                "desc": "Buy the policy",
                "action": "BUY_IMMUNITY",
            },
            "opt2": {
                "desc": "Just Ignore",
                "action": "SKIP"
            }
        },
        {
            "id": 18,
            "desc": "The Oracle offers WINTER insurance in exchange for  350 coins",
            "immunity_type": "ICE",
            "url": "https://storage.googleapis.com/assetlib/aac787f4-4e4d-4aa5-b257-20f80cc6d989.png",
            "opt1": {
                "desc": "Buy the policy",
                "action": "BUY_IMMUNITY",
            },
            "opt2": {
                "desc": "Just Ignore",
                "action": "SKIP"
            }
        },
        {
            "id": 19,
            "desc": "The Oracle offers employee insurance in exchange for  100 coins",
            "immunity_type": "EMPLOYEE",
            "url": "https://storage.googleapis.com/assetlib/aac787f4-4e4d-4aa5-b257-20f80cc6d989.png",
            "opt1": {
                "desc": "Buy the policy",
                "action": "BUY_IMMUNITY",
            },
            "opt2": {
                "desc": "Just Ignore",
                "action": "SKIP"
            }
        },
        {
            "id": 20,
            "desc": "The Oracle offers winter insurance for your health for  25 coins",
            "immunity_type": "HEALTH",
            "url": "https://storage.googleapis.com/assetlib/aac787f4-4e4d-4aa5-b257-20f80cc6d989.png",
            "opt1": {
                "desc": "Buy the policy",
                "action": "BUY_IMMUNITY",
            },
            "opt2": {
                "desc": "Just Ignore",
                "action": "SKIP"
            }
        },

        {
            "id": 3,
            "desc": "Bag of gold coins (200) ",
            "url": "https://lh3.googleusercontent.com/-onkm3TbxdhEmzPILpr9LN489jREWpzvktaGWCWfjZpulrlaHPiKx6GoufizAYxITFMRc199HVQ_VOrzZCmo75o=s0",
            "coins":  200,
            "opt1": {
                "desc": "Grab them like a gobblin",
                "action": "ADD_CASH",
               
            },
            "opt2": {
                "desc": "Just Ignore, I am filthy rich",
                "action": "SKIP"
            }
        },{
            "id": 4,
            "desc": "Dracarys !! Your kingdom has been attacked by denerys, her dragons have burned your castle. Lost  500 coins.",
            "url": "https://lh3.googleusercontent.com/XdOq5CZpOueurBFsDvIf17EZaZXeX2ta5xuQvZfvai-OjGmBNLSmQT4OZkdv85X7PQAn1EX_AesDotuy2yWZT0g=s0",
            "damage":  500,
            "attack_type": "DRAGON",
            "opt2": {
                "desc": "Arghh",
                "action": "ATTACK"
            }            
        }, {
            id: 5,
            desc: "Kingdom has been attacked by Ramsey of the house Bolton. War won, but costed  400 coins.",
            "url": "https://lh3.googleusercontent.com/XdOq5CZpOueurBFsDvIf17EZaZXeX2ta5xuQvZfvai-OjGmBNLSmQT4OZkdv85X7PQAn1EX_AesDotuy2yWZT0g=s0",
            damage: 400,
            attack_type: "COMBAT",
            immunity_type: "HEALTH",
         
            opt2: {
                "desc": "This will be avenged",
                "action": "ATTACK"
            }
        }, {
            id: 6,
            desc: "The night king’s army of the dead has risen against your kingdom. You have lost  250 coins battling and winning against them.",
            "url": "https://lh3.googleusercontent.com/1WkB_KhKBnQAkXy-LEeF6tyqUJgG6AprFolWp-_nrPqITVyjpplJcGSNXYBRg6HlcJuySeevhXjXd0prXue5lXc=s0",
            damage: 250,
            attack_type: "WHITE_WALKERS",
            immunity_type: "ICE",
            opt2: {
                "desc": "@#$%$$%",
                "action": "ATTACK"
            }
        },
        {
            id: 7,
            desc: "Aaahhh, your younger brother has been thrown from top of the tower. His health costs have amounted to a whooping  100 coins.",
            url :"https://lh3.googleusercontent.com/q8u7YUmAKY45fjF8_xY556A5Sr6FRLDmPBiqeWWqYmsbxilr3iIiPcjuA0lP9vRiF4lE1CCxOEaYMlgSsKhhJIjn=s0",
            damage: 100,
            attack_type: "ARMY_BATTLE",
            immunity_type: "HEALTH",
            opt2: {
                "desc": "Son of a B$%@!",
                "action": "ATTACK"
            }
        },{
            id: 8,
            desc: "Theon Grejoy has betrayed you and has attacked the kingdom with cannons. Loss of  800 coins", 
            url: "https://lh3.googleusercontent.com/q8u7YUmAKY45fjF8_xY556A5Sr6FRLDmPBiqeWWqYmsbxilr3iIiPcjuA0lP9vRiF4lE1CCxOEaYMlgSsKhhJIjn=s0",
            damage: 800,
            attack_type: "CANONS",
            immunity_type: "PROPERTY",
            opt2: {
                "desc": "Traitor !",
                "action": "ATTACK"
            }

        }, {
            id: 9,
            desc: "Alas, your bannermen have revolted against your kingdom, resulting in a loss of business. Use  300 coins to recover.",
            url:"https://lh3.googleusercontent.com/q8u7YUmAKY45fjF8_xY556A5Sr6FRLDmPBiqeWWqYmsbxilr3iIiPcjuA0lP9vRiF4lE1CCxOEaYMlgSsKhhJIjn=s0",
            damage: 300,
            attack_type: "ARMY_BATTLE",
            immunity_type: "EMPLOYEE",
            opt2: {
                "desc": "Such Peasants",
                "action": "ATTACK"
            }
        }, {
            id: 10,
            desc: "Cersie has plotted a wildfire against your kingdom, loss of  400 coins.",
            url:"https://lh3.googleusercontent.com/ZZktmSGBelMkXEWoLZbut5gvEt_vXsRJDxTMpr8VlcGkd2xaVgXtbH5n3QPe2XNpx9yJ9YXX7aIKuxPTl0_EjQ=s0",
            damage: 400,
            attack_type: "FIRE",
            immunity_type: "FIRE",
            opt2: {
                "desc": "Really?",
                "action": "ATTACK"
            }
        }, {
            id: 11,
            url:"https://lh3.googleusercontent.com/5VOfKcf4lS63lWoxvPh_W-GKPxVUm6T3hR8WfI512DDlCwjyJDYPol4y6tjdykSa9wEod8Xxa25Y-tX-grviWWU=s0",
            desc: "Theft has occurred in your treasury, loss of  200 coins.",
            damage: 200,
            attack_type: "TRAITOR_ARMY",
            immunity_type: "EMPLOYEE",
            opt2: {
                "desc": "Traitors.",
                "action": "ATTACK"
            }
        },
        {
           id: 12,
           desc: "A plague has broken out in your kingdom causing a loss of  300 coins.",
           damage: 300,
           attack_type: "PLAGUE",
           immunity_type: "HEALTH",
           url: "https://lh3.googleusercontent.com/wRAV7wx8tIwfMVPqDnsv-DD6Nnk0QbSpMsFPwam98x5JM1r3SqyFGghXlufMylrzYj6g2nYOZ1KZRJGgwjXakY8=s0",
           opt2: {
            "desc": "Argh",
            "action": "ATTACK"
            }
        },
        {
            id: 13,
            url:"https://lh3.googleusercontent.com/5VOfKcf4lS63lWoxvPh_W-GKPxVUm6T3hR8WfI512DDlCwjyJDYPol4y6tjdykSa9wEod8Xxa25Y-tX-grviWWU=s0",
            desc:"It’s celebration time!! Organize a feast and spend 300 coins",
            coins: 300,
            opt1: {
                "desc": "Much Needed",
                "action": "SUB_CASH"
            }
        },        
        {
            id:14,
            url :"https://lh3.googleusercontent.com/n2vO8AkUPORhNFNh5lar4dIfTKfoQ9_Rkz_65YSmZVj9kCeKjHOWlkJsFeS32R1Uv_83_HXlz-PRWNC0pFg4tWP0=s0",
            desc: "Congratulations!! You have acquired the kingdom of Tyrell. Add 600 points to your treasury",
            coins: 600,
            opt1: {
                desc: "Accept",
                "action": "ADD_CASH"
            }
        },
        {
            id:15,
            url:"https://lh3.googleusercontent.com/5VOfKcf4lS63lWoxvPh_W-GKPxVUm6T3hR8WfI512DDlCwjyJDYPol4y6tjdykSa9wEod8Xxa25Y-tX-grviWWU=s0",
            desc: "The house of Volantis has repaid your loan of 700 coins. Added to your account.",
            coins: 500,
            opt1: {
                desc: "Accept",
                "action": "ADD_CASH"
            }
        },
        {
            id: 16,
            url:"https://lh3.googleusercontent.com/2RRGK2-e3eAIdgfzQ0uB8d6tzQ-hqKMi_UMGyPb-9ynLlELSaGATQ_2K64svv5ot_egudHdO-w5yXB-BS_w_tXg=s0",
            desc: "The king of house Tarly has proposed a marriage for his daughter within your family. 1000 coins.",
            coins: 600,
            opt1: {
                desc: "Accept",
                "action": "ADD_CASH"
            }
        }
    ]


