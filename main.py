from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()


@app.get("/result_school")
def get_html():
    return FileResponse("./dist/index.html")

@app.get("/assets/index-iWhLWuTl.js")
def get_js():
    return FileResponse("./dist/assets/index-iWhLWuTl.js")

@app.get("/assets/index-gPKjVmce.css")
def get_css():
    return FileResponse("./dist/assets/index-gPKjVmce.css")

@app.get("/logo-name.svg")
def get_logo():
    return FileResponse("./dist/logo-name.svg")
