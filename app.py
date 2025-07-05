from flask import Flask , render_template , request , url_for , redirect , jsonify
app = Flask(__name__)


@app.route("/")
def index():
  card_work = [
    {"img": "static/images/work1.png",
     "text" : "Develop ecommerce website with admin panel"
     },
    {"img": "static/images/work2.png",
    "text":"Development full stack portfolio project"
    },
    {"img": "static/images/work3.png",
    "text":"Develop and Design a custom admin dashboard for your web app"
    },
    {"img": "static/images/work4.png",
    "text":"Modern coffee website with ordering system"
    },
    
  ]
  
  card_langs=[
    "static/images/imghtml.svg",
    "static/images/cssicons.svg",
    "static/images/javascriptImg.svg",
  ]
  
  card_cast=[
    {"img1": "static/images/img_cl1.png",
     "p": '"He took responsibility and was very flexible with the revisions. An excellent experience."',
     "img2" : "static/images/starticon.png"
     },
    {"img1": "static/images/img_cl2.png",
     "p": '"He had a deep understanding of the problem and offered innovative solutions — he saved the project."',
     "img2" : "static/images/starticon.png"
     },
    {"img1": "static/images/img_cl3.png",
     "p": '"Excellent work and precise execution of all the required details. Thank you very much."',
     "img2" : "static/images/starticon.png"
     }
  ]
  return  render_template("index.html" , card_work=card_work , card_langs=card_langs , card_cast=card_cast)


@app.route("/serves")
def serves():
  prograses=[
    {"p1" : "80%" ,
     "p2" : "Work Done"
     },
    
    {"p1" : "94%" ,
     "p2" : "Happy Clients"
     },
    
    {"p1" : "2+" ,
     "p2" : "Years Experience"
     },
    
  ]
    
  return  render_template("serves.html" , prograses=prograses )




@app.route("/cardAPI/serves" , methods=["GET"])
def cardAPI():
  if request.method == "GET":
    scilsui = [
     {
      "img1" : "static/images/figmaimg.svg" ,
      "title1" :"Figma" ,
      "lang1":  ["Ui Prissing", "Tools",]
     },
     {
      "img1" : "static/images/adobeimg.svg",
      "title1" :" Adobe XD", 
      "lang1": ["" ]
     }
    ]
    scilsFront = [
     {
      "img2" : "static/images/javascriptImg.svg" ,
      "title2" :"js" ,
      "lang2":  ["angular", "react" , "vue",]
     },
     {
      "img2" : "static/images/cssicons.svg",
      "title2" :"css", 
      "lang2": ["talwinda" , "bootstrap",]
     }
    ]
    
    scilsBack = [
     {
      "img3" : "static/images/pythonIMG.svg" ,
      "title3" :"Paython" ,
      "lang3":  ["Django", "Flask",]
     },
     {
      "img3" : "static/images/javaIMG.svg",
      "title3" :"java", 
      "lang3": ["Spring Boot" ]
     }
    ]
    
    
    scilsData = [
     {
      "img4" : "static/images/mysqlimg.svg" ,
      "title4" :"MySQL" ,
      "lang4":  ["Relational Database",]
     },
     {
      "img4" : "static/images/postgres.svg",
      "title4" :"PostgreSQL", 
      "lang4": ["Relational Database" ]
     },
     {
      "img4" : "static/images/firebaseimg.svg",
      "title4" :"fireBase", 
      "lang4": ["NoSQL Database" ]
     }
    ]
    
    
    # {"talwinda":"talwinda" , "bootstrap":"bootstrap"}
    # "lang":  {"angular":"angular", "react":"react" , "vue":"vue"}
    return jsonify(scilsui , scilsFront , scilsBack , scilsData)


 
@app.route('/about')
def about():
  return render_template('about.html')


@app.route('/blog')
def blog():
  return render_template('blog.html')

if __name__ ==  "main":
  app.run(debug=True)