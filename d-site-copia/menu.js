const head=document.head
const body=document.body

const css='<link rel="stylesheet" href="/d-site-copia/menu.css">'
head.innerHTML+=css

const header=document.createElement("header")
header.setAttribute("id", "header")
header.setAttribute("class", "header")
body.prepend(header)

const menu=
    "<div class='menu-bg'>"+
           "<div class='menu'>"+
                "<div class='logo-name'>"+
                    "<a href='./index.html'>"+
                        "<h1>ANDROCELL</h1>"+
                    "</a>"+
                "</div>"+
                "<nav class='menu-nav'>"+
                    "<ul>"+
                        "<li><a href='#cllr'>Celulares</a></li>"+
                        "<li><a href='#aces'>Acessórios</a></li>"+
                        "<li><a href='#'>Contato</a></li>"+
                        "<li><a href='./faqs.html'>FAQs</a></li>"+
                    "</ul>"+
                "</nav>"+
            "</div>"+
        "</div>"+
        "<div class='nav-bg'>"+
        "<div class='nav-container'>"+
            "<p>Seg / Sex - 08:00 às 18:00</p>"+
            "<div class='redes-item'>"+
                "<a href='#'><img src='./insta-1.png' alt='' id='instagram'></a>"+
                "<a href='#'><img src='./zap-1.png' alt='' id='whatsapp'></a>"+
            "</div>"
        "</div>"
    "</div> "   
header.innerHTML+=menu
