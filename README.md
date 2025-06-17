Teste Unitário:
O grupo foi designado a realizar um trabalho de operações aritméticas para validar o software. Embarcado da empresa de calculadora Techpoint, responsável pelo desenvolvimento de calculadoras portáteis. O time reunido por Paulo Ricardo, Bruno Ducka, Wellison, Lucas e Vinicius Ângelo é responsável por garantir que o módulo de operações básicas funcione corretamente antes de ser entregue a produção final. Desta forma é solicitado que o time realize testes unitários com rigor para as operações de soma, subtração, divisão e multiplicação prevendo
falhas comuns como estouro de valores e entradas inválidas.

1- Introduzindo o Selenium:

Para poder executar e codificar as dentro da página webp e automatiza, é nescessário puxar a biblioteca do selenium:

    ```python
# webdriver permite controlar navegadores
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time
import random

    ```
Com isso, código tem ligação com navegador
