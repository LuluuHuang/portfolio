const app = Vue.createApp({
    data() {
        return {
            title:'作品集',
            bgImg:'./img/bg2.jpg',
            infos:
            {
                name:'黃堉茹 / Lulu Huang',
                pic:'./img/lu.jpg',
                skills:[
                    'JavaScript',
                    'HTML',
                    'CSS',
                    'SCSS',
                    'Vue',
                    'Bootstrap',
                ],
                experience:[
                    '長林創新股份有限公司 前端工程師',
                    '汨宇國際有限公司 行銷專員'
                ],
                educate:'世新大學 公共關係暨廣告學系 畢業'
            },
            projects:[
                {
                    name:'個人攝影工作室形象網站',
                    link:'https://luluuhuang.github.io/project-YTD/',
                    img:'./img/05-昨日攝影.jpeg'
                },
                {
                    name:'飯店官網',
                    link:'http://www.younglake.com.tw/',
                    img:'./img/水漾.jpg'
                },
                {
                    name:'電子零件公司官網',
                    link:'https://trumps.com.tw/',
                    img:'./img/創宇.jpg'
                },
                {
                    name:'中興新村現場導覽網站',
                    link:'http://zrsi.beedemo.world/',
                    img:'./img/中興.jpg'
                },
                {
                    name:'生技公司一頁式訂購網站(串金流)',
                    link:'http://www.fhmedical.com.tw/',
                    img:'./img/芳和.jpg'
                },
                {
                    name:'旅遊網站',
                    link:'https://luluuhuang.github.io/----API/',
                    img:'./img/旅遊.jpg'
                },
                {
                    name:'微軟官網仿切',
                    link:'https://luluuhuang.github.io/microsoft/',
                    img:'./img/06-微軟仿切.png'
                },
                {
                    name:'簡易零售POS系統',
                    link:'#',
                    img:''
                }
            ]
        }
    },
});
app.mount('#app');