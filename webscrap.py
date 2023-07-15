import requests
result=requests.get("http://quotes.toscrape.com/")
import bs4
from bs4 import BeautifulSoup
soup=bs4.BeautifulSoup(result.text,'lxml')
text_of_elements=soup.select('.author')
for element in text_of_elements:
    print(element.text)
from selenium import webdriver


driver = webdriver.Chrome()


driver.get("http://quotes.toscrape.com/")


element = driver.find_element_by_css_selector("input[name='username']")
element.send_keys("myusername")


driver.quit()    