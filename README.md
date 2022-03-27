# WAP-proj1
Projekt 1 z předmětu Internetové apliakce (WAP) - VUT FIT

## Zadání
#### Popis:
Cílem projektu je seznámit se a pochopit programovací konstrukty jazyku JavaScript, prototypy objektů, konstruktory, iterátory a generátory. V rámci tohoto projektu nepoužívejte třídy přidané v rámci ECMAScript 2015. Vaším úkolem bude:
Vytvořit knihovnu vytvářející binární strom Tree nad libovolným datovým typem.
V rámci knihovny implementujte metody preorder, inorder a postorder pomocí generátorů.
Vaši knihovnu dokumentujte a otestujte,
Očekává se využití a spuštění knihovny pomocí Node.js. Vzorový testovací soubor můžete získat z https://www.fit.vutbr.cz/study/courses/WAP/private/proj/2022/test.mjs a vzorový výstup z https://www.fit.vutbr.cz/study/courses/WAP/private/proj/2022/v%C3%BDstup.

#### Knihovna tree.mjs

Knihovna bude součástí odevzdaného souboru pojmenovaného jako tree.mjs. Tato knihovna bude exportovat konstruktor Tree.

Každý strom bude od vytvoření svázán s porovnávací funkcí (o 2 parametrech), která bude určovat do kterého podstromu se má vložit nový prvek (levý v případě pozitivního vyhodnocení funkce - true a pravý v případě negativního vyhodnocení funkce - false).

Konstruktor Tree() vrátí objekt implementující (přímo nebo delegací) následující metody:

insertValue(value): Voláním funkce se do stromu vloží hodnota předaná jediným parametrem.
preorder(), inorder(), postorder(): Generátory vracející iterátory nad stromem.
Zajistěte, aby byl konstruktor i generátory volatelné opakovaně a bylo tak možné vytvořit více stromů i jednotlivých iterátorů. Předpokládejte, že v průběhu iterace nebudou vkládány nové prvky.

Očekávané vlastnosti knihovny:

Poskytuje jediný exportovaný konstruktor Tree().
Uložená data jsou uchovávaná ve formě binárního stromu.
Metody preorder(), inorder() a postorder() jsou generátory.
Minimalizujte použití podmínek. Namísto podmínek využijte delegaci volání. Dobře napsaná knihovna bude obsahovat podmínku nanejvýš v rámci implementace insertValue() pro rozhodnutí, do kterého podstromu vkládat.

#### Testy knihovny

V rámci vypracování projektu byste si měli vytvořit testy. Skript test.sh by měl spouštět tyto testy (spuštěný bez parametrů). Pokud budete pro testy potřebovat instalovat závislosti, implementujte parametr install pro testovací skript.

#### Dokumentace

Projekt dokumentujte pomocí dokumentačních řetězců přímo v kódu knihovny. Využijte nástroje jako je JSDoc, Doxygen apod. Vytvořte soubor doc.sh, který po spuštění vygeneruje dokumentaci z dokumentačních řetězců.

#### Orientační hodnocení projektu

program na testovacích datech vykazuje očekávané chování - 3b.,
kvalita implementace, vhodné využití jazyka JavaScript - 3b.,
kvalita vlastních testů - 2b.,
dokumentace - 2b.
Formální chyby, které nebudou tolerovány:
odevzdaný soubor nelze spustit a odzkoušet: 0 bodů
odevzdáno po termínu: 0 bodů
nedodržení zadání: 0 bodů
nefunkční kód: 0 bodů
opsáno: 0 bodů (pro všechny, kdo mají stejný kód), návrh na zahájení disciplinárního řízení.



## Hodnocení
- Úspěšný test ukázkový
- Úspěšný test prázdný
- Úspěšný test 2-vlevo
- Úspěšný test 2-vpravo
- Neúspěšný test vybalancovaný
- Úspěšný test tisíce-vlevo
- Úspěšný test tisíce-vpravo
- Úspěšný test tisíce-vybalancovaný
- Úspěšný test 5-stromů
- Excelentní rychlost implementace
- Čitelná implementace
- Dobrá dokumentace knihovny
- Rozumné testy

Body: 10/10
