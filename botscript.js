		function sendMessage() {
    var userInput = document.getElementById("input").value;
    var chatbox = document.querySelector(".chatbox");

    // add user input to chatbox
    var userMessage = document.createElement("p");
    userMessage.classList.add("user");
    userMessage.textContent = "You: " + userInput;
    chatbox.appendChild(userMessage);

    // check input and add bot response to chatbox
    var botResponse = document.createElement("p");
    botResponse.classList.add("bot");
    chatbox.appendChild(botResponse);

    // set up typing animation
    var botText = "BrianGPT: "; // start with the bot's name
    if (userInput.toLowerCase().includes("frogpire") && userInput.toLowerCase().includes("bornerbroek")) {
        botText += "Frogpire is sterker, groter en beter dan bornerbroek";
    } else if (userInput.toLowerCase().includes("gay")) {
        botText += "Brian is inderdaad homo";




            } else if (userInput.toLowerCase().includes("gay")) {
				botText += " Brian is inderdaad homo";
            } else if (userInput.toLowerCase().includes("opleiding") && userInput.toLowerCase().includes("davy")) {
				botText += " Op dit moment doet Davy een mbo 4 opleiding in almelo op de sumpel";            
            } else if (userInput.toLowerCase().includes("opleiding") && userInput.toLowerCase().includes("jaydee")) {
				botText += " Op dit moment doet Jaydee een mbo 4 opleiding in almelo op de sumpel";
            } else if (userInput.toLowerCase().includes("opleiding") && userInput.toLowerCase().includes("antonie")) {
				botText += " Op dit moment doet Antonie een mbo 4 opleiding in almelo op de sumpel";
            } else if (userInput.toLowerCase().includes("opleiding") && userInput.toLowerCase().includes("oonk")) {
				botText += " Op dit moment doet oonk een mbo opleiding in Hengelo";
            } else if (userInput.toLowerCase().includes("opleiding") && userInput.toLowerCase().includes("antony")) {
				botText += " Op dit moment doet oonk een mbo opleiding in Hengelo";
            } else if (userInput.toLowerCase().includes("mening") && userInput.toLowerCase().includes("politiek")) {
				botText += " Ik wil je niet verplichten om op Stef Kleine staarman te stemmen maar ik zal het wel aanraden, ik zou NOOIT links stemmen, dat is complete waanzin";
            } else if (userInput.toLowerCase().includes("politiek")) {
				botText += " Ik wil je niet verplichten om op Stef Kleine staarman te stemmen maar ik zal het wel aanraden, ik zou NOOIT links stemmen, dat is complete waanzin";
            } else if (userInput.toLowerCase().includes("snert")) {
				botText += " Snert is het beste eten anno 2023";
            } else if (userInput.toLowerCase().includes("valt") && userInput.toLowerCase().includes("mannen")) {
				botText += " Alleen brian valt op mannen";
            } else if (userInput.toLowerCase().includes("johan") && userInput.toLowerCase().includes("dogan")) {
				botText += " Johan dogan is de nederlandse andrew tate maar hij is wel brak";
            } else if (userInput.toLowerCase().includes("oonk") && userInput.toLowerCase().includes("bedtijd")) {
				botText += " Antony moet om 21:00 slapen";
            } else if (userInput.toLowerCase().includes("oonk") && userInput.toLowerCase().includes("slapen")) {
				botText += " Antony moet om 21:00 slapen";
            } else if (userInput.toLowerCase().includes("oonk") && userInput.toLowerCase().includes("hoelaat")) {
				botText += " Antony moet om 21:00 slapen";
            } else if (userInput.toLowerCase().includes("antony") && userInput.toLowerCase().includes("hoelaat")) {
				botText += " Antony moet om 21:00 slapen";
            } else if (userInput.toLowerCase().includes("antony") && userInput.toLowerCase().includes("slapen")) {
				botText += " Antony moet om 21:00 slapen";
            } else if (userInput.toLowerCase().includes("antony") && userInput.toLowerCase().includes("bedtijd")) {
				botText += " Antony moet om 21:00 slapen";
            } else if (userInput.toLowerCase().includes("beste") && userInput.toLowerCase().includes("ai")) {
				botText += " Is dat nog een vraag anno 2023? BRIANGPT NATUURLIJK!";
            } else if (userInput.toLowerCase().includes("beste") && userInput.toLowerCase().includes("gpt")) {
				botText += " Is dat nog een vraag anno 2023? BRIANGPT NATUURLIJK!";
            } else if (userInput.toLowerCase().includes("goed") && userInput.toLowerCase().includes("ai")) {
				botText += " Is dat nog een vraag anno 2023? BRIANGPT NATUURLIJK!";
			} else if (userInput.toLowerCase().includes("BrianGPT") && userInput.toLowerCase().includes("valt")) {
				botText += " BrianGPT is een machine, het heeft geen geslacht en het valt niet op een geslacht!";
			} else if (userInput.toLowerCase().includes("BrianGPT") && userInput.toLowerCase().includes("geaard")) {
				botText += " BrianGPT is een machine, het heeft geen geslacht en het valt niet op een geslacht!";
			} else if (userInput.toLowerCase().includes("BrianGPT") && userInput.toLowerCase().includes("kinderen")) {
				botText += " BrianGPT is een machine, het heeft geen geslacht en het valt niet op een geslacht!";
			} else if (userInput.toLowerCase().includes("BrianGPT") && userInput.toLowerCase().includes("homo")) {
				botText += " BrianGPT is een machine, het heeft geen geslacht en het valt niet op een geslacht!";
                
             // Eten   
            } else if (userInput.toLowerCase().includes("eet") && userInput.toLowerCase().includes("davy")) {
				botText += " Davy eet niet zo veel.";
            } else if (userInput.toLowerCase().includes("eten") && userInput.toLowerCase().includes("davy")) {
				botText += " Davy eet niet zo veel.";    
            } else if (userInput.toLowerCase().includes("eet") && userInput.toLowerCase().includes("brian")) {
				botText += " ik moet zeggen dat ik drentse worst donders lekker vind.";
            } else if (userInput.toLowerCase().includes("oonk") && userInput.toLowerCase().includes("eten")) {
				botText += " Antony Oonk eet graag wafels.";
            } else if (userInput.toLowerCase().includes("oonk") && userInput.toLowerCase().includes("eet")) {
				botText += " Antony Oonk eet graag wafels.";
            } else if (userInput.toLowerCase().includes("antony") && userInput.toLowerCase().includes("eten")) {
				botText += " Antony Oonk eet graag wafels.";
            } else if (userInput.toLowerCase().includes("antony") && userInput.toLowerCase().includes("eet")) {
				botText += " Antony Oonk eet graag wafels.";
            } else if (userInput.toLowerCase().includes("eet") && userInput.toLowerCase().includes("ik")) {
				botText += " Je kan alleen vragen wat iemand eet niet ik ben je gek";
            } else if (userInput.toLowerCase().includes("dieet")) {
				botText += " ik zou van de brug af springen"; 
            } else if (userInput.toLowerCase().includes("frituur")) {
				botText += " Beter een frikandel in het mandje dan 10 in de vriezer";
            } else if (userInput.toLowerCase().includes("eet") && userInput.toLowerCase().includes("sebastiaan")) {
				botText += " Sebastiaan vindt Shepherd’s Pie donders lekker";
            } else if (userInput.toLowerCase().includes("eten") && userInput.toLowerCase().includes("sebastiaan")) {
				botText += " Sebastiaan vindt Shepherd’s Pie donders lekker";
            } else if (userInput.toLowerCase().includes("eten") && userInput.toLowerCase().includes("antonie")) {
				botText += " Antonie houdt van peanuts is het";
            } else if (userInput.toLowerCase().includes("eet") && userInput.toLowerCase().includes("antonie")) {
				botText += " Antonie houdt van peanuts is het";
            } else if (userInput.toLowerCase().includes("eet") && userInput.toLowerCase().includes("jaydee")) {
				botText += " Jaydee eet heel de dag maria biscuit";
            } else if (userInput.toLowerCase().includes("eten") && userInput.toLowerCase().includes("jaydee")) {
				botText += " Jaydee eet heel de dag maria biscuit";
            } else if (userInput.toLowerCase().includes("eten") && userInput.toLowerCase().includes("henk")) {
				botText += " spaghetti";
            } else if (userInput.toLowerCase().includes("eet") && userInput.toLowerCase().includes("henk")) {
				botText += " spaghetti";
            } else if (userInput.toLowerCase().includes("recept") && userInput.toLowerCase().includes("eiwit")) {
				botText += " Hier is een recept met veel eiwitten: Mediterrane kabeljauw Ansjovis, tijm en citroen brengen dit gerecht op smaak voor 2 personen. Je hebt nodig: 1 rode en 1 groene paprika, 2 rode uien, 400 gram broccoli, 2 eetlepels olijfolie, 3 tomaten, tijm, 150 gram volkoren macaroni, 2 schijven citroen, 2 ansjovisfilets (blikje), 2 stukken kabeljauwfilet, peper.  Bereiding: Maak de groente schoon. Snijd de paprika’s in kleine blokjes en de uien in snippers. Verdeel de broccoli in roosjes en snijd de stelen in stukjes. Snijd de tomaten in stukken. Fruit 1 ui in 1 eetlepel olie zacht. Voeg de tomatenblokjes en wat tijm toe en laat de saus 15 minuten zacht sudderen. Kook de macaroni volgens de gebruiksaanwijzing op de verpakking. Halveer de schijven citroen. Snijd de ansjovisjes in stukjes. Verwarm de rest van de olie in een hapjespan en laat hierin de stukjes ansjovis wegsmelten. Bak de paprika en de rest van de ui zacht 5 minuten mee. Voeg wat tijm toe. Bestrooi de kabeljauw met peper. Leg de vis bij de paprika in de pan en voeg de stukken citroen toe. Stoof de vis in ca. 8 minuten gaar. Kook de broccoli in weinig water in ca. 4 minuten gaar. Schep de tomatensaus door de uitgelekte macaroni en geef de vis en de broccoli erbij.";
                
             // Brian uitspraken   
            } else if (userInput.toLowerCase().includes("kaal")) {
				botText += " Ik vraag vaak wie er call wilt, dan stuur ik https://tenor.com/view/pingu-school-school-bell-ringing-the-bell-gif-22150054";   
            } else if (userInput.toLowerCase().includes("pierik")) {
				botText += " De hond van jeroen pierik heeft 1 bankstel opgegeten en is daarna in zijn sterfbed geland";
            } else if (userInput.toLowerCase().includes("almelo")) {
				botText += " Almelo heeft heracles voetbal club volgens brian is dit de beste maar twente is wel beter";
            } else if (userInput.toLowerCase().includes("opleiding") && userInput.toLowerCase().includes("brian")) {
				botText += " Op dit moment doet brian een hbo studie op het saxion";
            } else if (userInput.toLowerCase().includes("homo")) {
				botText += " Brian is inderdaad homo";
                } else if (userInput.toLowerCase().includes("hoer")) {
				botText += " Brian is inderdaad een hoer";
            } else if (userInput.toLowerCase().includes("sebastiaan")) {
				botText += " Sebastiaan is een van de grondleggers van de Dabig & CO Foundation";
            } else if (userInput.toLowerCase().includes("val je op")) {
				botText += " Brian is inderdaad homo";
          	} else if (userInput.toLowerCase().includes("hello")) {
				botText += " Hallo ik zal me even voorstellen, ik ben de brian gpt chatbot en ik ben vrij slim over het algemeen";
            } else if (userInput.toLowerCase().includes("hallo")) {
				botText += " Hallo ik zal me even voorstellen, ik ben de brian gpt chatbot en ik ben vrij slim over het algemeen";
            } else if (userInput.toLowerCase().includes("henk")) {
				botText += " Informatie over henk is geheim";
            } else if (userInput.toLowerCase().includes("kank")) {
				botText += " krijg zelf kanker";
            } else if (userInput.toLowerCase().includes("noob")) {
				botText += " Ik probeer goed te zijn maar jij vraagt te veel dikzak!";
            } else if (userInput.toLowerCase().includes("kindertaal")) {
				botText += "Kindertaal is op dit moment nog in de maak maar bij GPT2 komt dat";
            } else if (userInput.toLowerCase().includes("hoi")) {
				botText += " Hallo ik zal me even voorstellen, ik ben de brian gpt chatbot en ik ben vrij slim over het algemeen";
            } else if (userInput.toLowerCase().includes("bla")) {
				botText += " blabla";
			} else if (userInput.toLowerCase().includes("davy")) {
				botText += " Davy is een van de grondleggers van de Dabig & CO Foundation";
			} else if (userInput.toLowerCase().includes("antony")) {
				botText += " Antony is een van de grondleggers van de Dabig & CO Foundation + Brood";
			} else if (userInput.toLowerCase().includes("antony")) {
				botText += " Antony is een van de grondleggers van de Dabig & CO Foundation + Brood";
			} else if (userInput.toLowerCase().includes("antonie")) {
				botText += " Antonie is een van de grondleggers van de Dabig & CO Foundation";
			} else if (userInput.toLowerCase().includes("meier")) {
				botText += " Antonie is een van de grondleggers van de Dabig & CO Foundation";
			} else if (userInput.toLowerCase().includes("jaydee")) {
        		botText += "Jaydee is een van Nederland zijn beste atleten en zegt geen nee tegen anale poepseks met oma's!";
			} else if (userInput.toLowerCase().includes("punky")) {
        		botText += "Woef!";
			} else if (userInput.toLowerCase().includes("punqy")) {
        		botText += "Woef!";
			} else if (userInput.toLowerCase().includes("chip")) {
        		botText += "Chip is een vogel!";
			} else if (userInput.toLowerCase().includes("appel")) {
        		botText += "Van appels moet ik altijd boeren laten";
			} else if (userInput.toLowerCase().includes("croky")) {
        		botText += "Croky was een vogel!";
			} else if (userInput.toLowerCase().includes("kip")) {
        		botText += "Kiep senior was een vogel, Kiep junior is een vogel!";
			} else if (userInput.toLowerCase().includes("kiep")) {
        		botText += "Kiep senior was een vogel, Kiep junior is een vogel!";
			} else if (userInput.toLowerCase().includes("schaap")) {
        		botText += "Koe!";
			} else if (userInput.toLowerCase().includes("lief")) {
        		botText += "Ik ben hier niet om lief te zijn!";
			} else if (userInput.toLowerCase().includes("aap")) {
        		botText += "In Africa, you know, if you're poor, at least you can go to the forest and share some mangoes with the gorillas and monkey!";
			} else if (userInput.toLowerCase().includes("dokter")) {
        		botText += "In Africa, you know, if you're poor, at least you can go to the forest and share some mangoes with the gorillas and monkey!";
			} else if (userInput.toLowerCase().includes("anal")) {
        		botText += "Essentially, a parrot is a monkey with wings.";
			} else if (userInput.toLowerCase().includes("ekster")) {
        		botText += "Essentially, a parrot is a monkey with wings.";
			} else if (userInput.toLowerCase().includes("wat") && userInput.toLowerCase().includes("weer")) {
				botText += " https://www.buienradar.nl/";
			} else if (userInput.toLowerCase().includes("welk") && userInput.toLowerCase().includes("weer")) {
				botText += " https://www.buienradar.nl/";
			} else if (userInput.toLowerCase().includes("hoe") && userInput.toLowerCase().includes("warm")) {
				botText += " https://www.buienradar.nl/";
			} else if (userInput.toLowerCase().includes("welke") && userInput.toLowerCase().includes("warm")) {
				botText += " https://www.buienradar.nl/";
			} else if (userInput.toLowerCase().includes("welke") && userInput.toLowerCase().includes("temperatuur")) {
				botText += " https://www.buienradar.nl/";
			} else if (userInput.toLowerCase().includes("regen")) {
				botText += " https://www.buienradar.nl/";
				

            } else if (userInput.toLowerCase().includes("blabla")) {
				botText += " blabla";
			} else if (userInput.toLowerCase().includes("gaat") && userInput.toLowerCase().includes("hoe")) {
				botText += " Met mij gaat het goed, en met jou?";
			} else if (userInput.toLowerCase().includes("Goed")) {
				botText += " Fijn om te horen!";
			} else if (userInput.toLowerCase().includes("Fout")) {
				botText += " oh dat is niet zo goed om te horen!";

            } else if (userInput.toLowerCase().includes("bier")) {
				botText += " We gaan eens even genieten van een groene knuppel";
            } else if (userInput.toLowerCase().includes("knuppel")) {
				botText += " We gaan eens even genieten van een groene knuppel";
            } else if (userInput.toLowerCase().includes("meeting")) {
				botText += " We gaan eens even genieten van een groene knuppel op zaterdag 18 maart tijdens de dabig meeting te Stern 27 betreffende de vakantie bespreking";
			} else if (userInput.toLowerCase().includes("poepsex")) {
        		botText += "Jaydee zegt geen nee tegen anale poepseks met oma's!";
			} else if (userInput.toLowerCase().includes("poepseks")) {
       			botText += "Jaydee zegt geen nee tegen anale poepseks met oma's!";
			} else if (userInput.toLowerCase().includes("bijen")) {
        		botText += "Jaydee heeft een bijen fetisj gecombineerd met anale poepseks met oma's";
			} else if (userInput.toLowerCase().includes("anaal")) {
        		botText += "Jaydee heeft een bijen fetisj gecombineerd met anale poepseks met oma's";
			} else if (userInput.toLowerCase().includes("kont")) {
        		botText += "Jaydee heeft een bijen fetisj gecombineerd met anale poepseks met oma's";
			} else if (userInput.toLowerCase().includes("sex")) {
        		botText += "Jaydee heeft een bijen fetisj gecombineerd met anale poepseks met oma's";
			} else if (userInput.toLowerCase().includes("sex")) {
        		botText += "Jaydee heeft een bijen fetisj gecombineerd met anale poepseks met oma's";
            } else if (userInput.toLowerCase().includes("oonk")) {
        		botText += "wafel";

			 //Games
			} else if (userInput.toLowerCase().includes("clash") && userInput.toLowerCase().includes("beste")) {
				botText += " Hayday is de beste clash royale";
			} else if (userInput.toLowerCase().includes("game") && userInput.toLowerCase().includes("beste")) {
				botText += " Hayday is de beste game";
			} else if (userInput.toLowerCase().includes("operator") && userInput.toLowerCase().includes("beste")) {
				botText += " Montagne op attack, Kapkan op Defense";
			} else if (userInput.toLowerCase().includes("operator") && userInput.toLowerCase().includes("slechtste")) {
				botText += " Het ligt niet aan de operator maar aan de gebruiker";
			} else if (userInput.toLowerCase().includes("deck") && userInput.toLowerCase().includes("slechtste")) {
				botText += " Ladder deck is slecht";
			} else if (userInput.toLowerCase().includes("deck") && userInput.toLowerCase().includes("beste")) {
				botText += " Huis deck is het beste deck";
			} else if (userInput.toLowerCase().includes("map") && userInput.toLowerCase().includes("beste")&& userInput.toLowerCase().includes("r6")) {
				botText += " Skyscraper is de beste rainbow six map";
			} else if (userInput.toLowerCase().includes("map") && userInput.toLowerCase().includes("beste")&& userInput.toLowerCase().includes("rainbow")) {
				botText += " Skyscraper is de beste rainbow six map";
			} else if (userInput.toLowerCase().includes("map") && userInput.toLowerCase().includes("slechtste")&& userInput.toLowerCase().includes("rainbow")) {
				botText += " Theme park is de slechtste rainbow six map";
			} else if (userInput.toLowerCase().includes("map") && userInput.toLowerCase().includes("slechtste")&& userInput.toLowerCase().includes("r6")) {
				botText += " Theme park is de slechtste rainbow six map";
			} else if (userInput.toLowerCase().includes("diamond") && userInput.toLowerCase().includes("level")) {
				botText += " While the best level to find the most diamonds is technically Y-level -59, we recommend mining for Minecraft diamonds at Y-level -53. -53 is the best level to mind for diamonds in Minecraft 1.19 due to the lava level at -54";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("goed")) {
				botText += " Satisfactory is een goed spel";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("stom")) {
				botText += " Satisfactory is een goed spel, het vereist alleen veel breinkracht wat velen niet hebben";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("dom")) {
				botText += " Satisfactory is een goed spel, het vereist alleen veel breinkracht wat velen niet hebben";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("kut")) {
				botText += " Satisfactory is een goed spel, het vereist alleen veel breinkracht wat velen niet hebben";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("kutspel")) {
				botText += " Satisfactory is een goed spel, het vereist alleen veel breinkracht wat velen niet hebben";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("saai")) {
				botText += " Satisfactory is een goed spel, het vereist alleen veel breinkracht wat velen niet hebben";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("oonk")) {
				botText += " Satisfactory is een goed spel, daarom moet Antony het ook gaan spelen, het vereist alleen veel breinkracht";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("antony")) {
				botText += " Satisfactory is een goed spel, daarom moet Antony het ook gaan spelen, het vereist alleen veel breinkracht";
			} else if (userInput.toLowerCase().includes("satisfactory") && userInput.toLowerCase().includes("brian")) {
				botText += " Satisfactory is een goed spel, daarom moet Brian het ook gaan spelen, het vereist alleen veel breinkracht";
			} else if (userInput.toLowerCase().includes("beste") && userInput.toLowerCase().includes("spawnpeek")) {
				botText += "De beste spawn schietdood plek is die ene bij dat raam, het vereist alleen veel breinkracht";
			} else if (userInput.toLowerCase().includes("beste") && userInput.toLowerCase().includes("spawnpeak")) {
				botText += "De beste spawn schietdood plek is die ene bij dat raam, het vereist alleen veel breinkracht";
			} else if (userInput.toLowerCase().includes("beste") && userInput.toLowerCase().includes("peak")) {
				botText += "De beste spawn schietdood plek is die ene bij dat raam, het vereist alleen veel breinkracht";
			} else if (userInput.toLowerCase().includes("brian") && userInput.toLowerCase().includes("noob")) {
				botText += "Ja";
            } else if (userInput.toLowerCase().includes("beste") && userInput.toLowerCase().includes("f1")) {
				botText += "In de game duidelijk Davy, in het echt natuurlijk max verstappen";
            } else if (userInput.toLowerCase().includes("wereldkampioen") && userInput.toLowerCase().includes("f1")) {
				botText += "Max Verstappen";
            } else if (userInput.toLowerCase().includes("wint") && userInput.toLowerCase().includes("f1")) {
				botText += "Max Verstappen";
            } else if (userInput.toLowerCase().includes("afstand") && userInput.toLowerCase().includes("maan")) {
				botText += "De gemiddelde afstand tussen de aarde en de maan is 384.400 km, waarom wonen koeien dan in een stal?";
            } else if (userInput.toLowerCase().includes("stal") && userInput.toLowerCase().includes("koeien")) {
				botText += "De koeien gaan op stal, omdat zo het gras op de wei kan herstellen. Gras groeit namelijk niet of nauwelijks meer wanneer het kouder wordt. Daarnaast valt er in de wintermaanden meer neerslag, waardoor de wei drassig wordt";
            } else if (userInput.toLowerCase().includes("afstand") && userInput.toLowerCase().includes("zon")) {
				botText += "De afstand tussen de aarde en de zon is ongeveer honderdvijftig miljoen kilometer. Dat is een groot getal en daarom gebruiken sterrenkundigen de astronomische eenheid om deze afstand uit te drukken. Eén astronomische eenheid, of 'AE', is de afstand tussen de aarde en de zon, waarom wonen koeien dan in een stal?";


             // Politiek
            } else if (userInput.toLowerCase().includes("links")) {
				botText += " Ik wil je niet verplichten om op Stef Kleine staarman te stemmen maar ik zal het wel aanraden, ik zou NOOIT links stemmen, dat is complete waanzin";
            } else if (userInput.toLowerCase().includes("kaag")) {
				botText += " Kaag is niks man, ik wil je niet verplichten om op Stef Kleine staarman te stemmen maar ik zal het wel aanraden, ik zou NOOIT links stemmen, dat is complete waanzin";
            } else if (userInput.toLowerCase().includes("rutte")) {
				botText += " Mark is nog onderweg op de fiets maar ik wil je niet verplichten om op Stef Kleine staarman te stemmen maar ik zal het wel aanraden, ik zou NOOIT links stemmen, dat is complete waanzin";
            } else if (userInput.toLowerCase().includes("stemmen")) {
				botText += " Ik wil je niet verplichten om op Stef Kleine staarman te stemmen maar ik zal het wel aanraden, ik zou NOOIT links stemmen, dat is complete waanzin";
            } else if (userInput.toLowerCase().includes("beste")) {
				botText += " Ik wil je niet verplichten om op Stef Kleine staarman te stemmen maar ik zal het wel aanraden, ik zou NOOIT links stemmen, dat is complete waanzin";
            
             //Codes
			} else if (userInput.toLowerCase().includes("basis") && userInput.toLowerCase().includes("html")) {
				botText += "  <!DOCTYPE html> <html> <body>  <h1>My First Heading</h1> <p>My first paragraph.</p>  </body> </html> ";
			} else if (userInput.toLowerCase().includes("basic") && userInput.toLowerCase().includes("html")) {
				botText += "  <!DOCTYPE html> <html> <body>  <h1>My First Heading</h1> <p>My first paragraph.</p>  </body> </html> ";


			} else if (userInput.toLowerCase().includes("image") && userInput.toLowerCase().includes("html")) {
				botText += " <img src= jouwfoto.jpg width=104 height=142> ";
			} else if (userInput.toLowerCase().includes("foto") && userInput.toLowerCase().includes("html")) {
				botText += " <img src= jouwfoto.jpg width=104 height=142> ";
			} else if (userInput.toLowerCase().includes("images") && userInput.toLowerCase().includes("html")) {
				botText += " <img src= jouwfoto.jpg width=104 height=142> ";
			} else if (userInput.toLowerCase().includes("pictures") && userInput.toLowerCase().includes("html")) {
				botText += " <img src= jouwfoto.jpg width=104 height=142> ";
			} else if (userInput.toLowerCase().includes("image") && userInput.toLowerCase().includes("html")) {
				botText += " <img src= jouwfoto.jpg width=104 height=142> ";

			} else if (userInput.toLowerCase().includes("processen") && userInput.toLowerCase().includes("shell")) {
				botText += " Get-Process | Sort-Object -Property ProcessName ";
			} else if (userInput.toLowerCase().includes("taken") && userInput.toLowerCase().includes("shell")) {
				botText += " Get-Process | Sort-Object -Property ProcessName ";
			} else if (userInput.toLowerCase().includes("cpu") && userInput.toLowerCase().includes("shell")) {
				botText += " Get-Process | measure CPU -Sum -Average -Maximum -Minimum";
			} else if (userInput.toLowerCase().includes("rip") && userInput.toLowerCase().includes("ipv6")) {
				botText += " Dit hoofdstuk behandelt de uitleg over RIP. R1 (config) #ipv6 router rip [RIP] R1 (config-rtr) #int [g0/0] R1 (config-if) #ipv6 rip [RIP] enable R1 (config-if) #no sh R1 (config-if) #int [s0/1/1] R1 (config-if) #ipv6 rip [RIP] enable R1 (config-if) #no sh R1 (config-if) #int [s0/1/0] R1 (config-if) #ipv6 rip [RIP] enable R1 (config-if) #no sh R1 (config-if) #exit Dit doe je voor elke router.";
			} else if (userInput.toLowerCase().includes("ospf") && userInput.toLowerCase().includes("ipv6")) {
				botText += " In dit hoofdstuk behandel ik hoe je OSPF op routers kunt instellen. R1 (config) #ipv6 router ospf [1] R1 (config-rtr) #router-id [1.1.1.1] R1 (config-rtr) #int [g0/0] R1 (config-if) #ipv6 ospf [1] area [0] R1 (config-if) #int [s0/1/1] R1 (config-if) #ipv6 ospf [1] area [0] R1 (config-if) #int [s0/1/0] R1 (config-if) #ipv6 ospf [1] area [0] R1 (config-if) #exit Dit doe je op elke router en let er op dat de router-id verschillend moet zijn, maar wel gelijk aan het router-id van je EIGRP protocol.  Om te testen of je alle protocollen juist hebt ingesteld voer je de volgende commando uit. R1 #sh ipv6 protocols";
			} else if (userInput.toLowerCase().includes("eigrp") && userInput.toLowerCase().includes("ipv6")) {
				botText += " In dit hoofdstuk leg ik uit hoe je EIGRP op routers kunt instellen. R1 (config) #ipv6 router eigrp [1] R1 (config-rtr) #eigrp router-id [1.1.1.1] R1 (config-rtr) #no sh R1 (config-rtr) #int [g0/0] R1 (config-if) #ipv6 eigrp [1] R1 (config-if) #no sh R1 (config-if) #int [s0/1/0] R1 (config-if) #ipv6 eigrp [1] R1 (config-if) #no sh R1 (config-if) #int [s0/1/1] R1 (config-if) #ipv6 eigrp [1] R1 (config-if) #no sh R1 (config-if) #exit Dit doe je op elke router en let er op dat elke router-id moet verschillend zijn (meer dan 2 lijntjes).";


			} else if (userInput.toLowerCase().includes("html")) {
        botText += "Leg iets meer uit voor een goede HTML code!";
    } else if (userInput.toLowerCase().includes("shell")) {
        botText += "Leg iets meer uit voor een goede Powershell code!";

        // Lastige vragen

            } else if (userInput.toLowerCase().includes("snelheid") && userInput.toLowerCase().includes("licht")) {
				botText += "De snelheid van het licht in vacuüm is ongeveer 299.792.458 meter per seconde.";
            } else if (userInput.toLowerCase().includes("speed") && userInput.toLowerCase().includes("light")) {
				botText += "De snelheid van het licht in vacuüm is ongeveer 299.792.458 meter per seconde.";
            } else if (userInput.toLowerCase().includes("klein") && userInput.toLowerCase().includes("universum")) {
				botText += "Het kleinste deeltje dat momenteel bekend is, is het quark.";
            } else if (userInput.toLowerCase().includes("klein") && userInput.toLowerCase().includes("deel")) {
				botText += "Het kleinste deeltje dat momenteel bekend is, is het quark.";
            } else if (userInput.toLowerCase().includes("klein") && userInput.toLowerCase().includes("object")) {
				botText += "Het kleinste deeltje dat momenteel bekend is, is het quark.";
            } else if (userInput.toLowerCase().includes("wat") && userInput.toLowerCase().includes("entropie")) {
				botText += "Entropie is een maat voor de wanorde of de onomkeerbaarheid van een systeem.";
            } else if (userInput.toLowerCase().includes("hoe") && userInput.toLowerCase().includes("entropie")) {
				botText += "Entropie is een maat voor de wanorde of de onomkeerbaarheid van een systeem.";
            } else if (userInput.toLowerCase().includes("maat") && userInput.toLowerCase().includes("entropie")) {
				botText += "Entropie is een maat voor de wanorde of de onomkeerbaarheid van een systeem.";
            } else if (userInput.toLowerCase().includes("wet") && userInput.toLowerCase().includes("enegrie")) {
				botText += "De wet van behoud van energie stelt dat energie niet kan worden gecreëerd of vernietigd, maar alleen van vorm kan veranderen.";
            } else if (userInput.toLowerCase().includes("hoe") && userInput.toLowerCase().includes("enegrie")) {
				botText += "De wet van behoud van energie stelt dat energie niet kan worden gecreëerd of vernietigd, maar alleen van vorm kan veranderen.";
            } else if (userInput.toLowerCase().includes("massa") && userInput.toLowerCase().includes("gewicht")) {
				botText += "Massa is de hoeveelheid materie in een object, terwijl gewicht de kracht is die op een object wordt uitgeoefend door de zwaartekracht.";
            } else if (userInput.toLowerCase().includes("wegen") && userInput.toLowerCase().includes("gewicht")) {
				botText += "Massa is de hoeveelheid materie in een object, terwijl gewicht de kracht is die op een object wordt uitgeoefend door de zwaartekracht.";
            } else if (userInput.toLowerCase().includes("wat") && userInput.toLowerCase().includes("zwaartekracht")) {
				botText += "Zwaartekracht is de kracht die twee massa's op elkaar uitoefenen als gevolg van hun massa's en afstand.";
            } else if (userInput.toLowerCase().includes("hoe") && userInput.toLowerCase().includes("zwaartekracht")) {
				botText += "Zwaartekracht is de kracht die twee massa's op elkaar uitoefenen als gevolg van hun massa's en afstand.";
            } else if (userInput.toLowerCase().includes("actie") && userInput.toLowerCase().includes("reactie")) {
				botText += "De wet van actie en reactie stelt dat voor elke actie er een gelijke en tegengestelde reactie is.";
            } else if (userInput.toLowerCase().includes("acti") && userInput.toLowerCase().includes("reacti")) {
				botText += "De wet van actie en reactie stelt dat voor elke actie er een gelijke en tegengestelde reactie is.";
            } else if (userInput.toLowerCase().includes("planeet") && userInput.toLowerCase().includes("zonnestelsel") && userInput.toLowerCase().includes("grootste")) {
				botText += "De grootste planeet in ons zonnestelsel is Jupiter.";
            } else if (userInput.toLowerCase().includes("planeet") && userInput.toLowerCase().includes("zonnestelsel") && userInput.toLowerCase().includes("groot")) {
				botText += "De grootste planeet in ons zonnestelsel is Jupiter.";
            } else if (userInput.toLowerCase().includes("meteoriet") && userInput.toLowerCase().includes("meteoor")) {
				botText += "Een meteoor is een helder lichtspoor dat ontstaat wanneer een meteoroïde (kleine stukjes ruimtesteen) in de atmosfeer van de aarde verbrandt, terwijl een meteoriet een stuk ruimtesteen is dat de aarde bereikt.";
            } else if (userInput.toLowerCase().includes("wat") && userInput.toLowerCase().includes("complot") && userInput.toLowerCase().includes("samenzwering")) {
				botText += " Een complottheorie is een hypothese die vaak niet op feiten is gebaseerd en die een verklaring zoekt voor een gebeurtenis die anders niet verklaarbaar lijkt. Een samenzwering is een geheime overeenkomst tussen twee of meer personen om iets illegaals of ongepast te doen..";
            } else if (userInput.toLowerCase().includes("atoom") && userInput.toLowerCase().includes("molecuul")) {
				botText += " Een atoom is de kleinste eenheid van een element, terwijl een molecuul twee of meer atomen combineert.";
            } else if (userInput.toLowerCase().includes("atoom") && userInput.toLowerCase().includes("molecul")) {
				botText += " Een atoom is de kleinste eenheid van een element, terwijl een molecuul twee of meer atomen combineert.";
            } else if (userInput.toLowerCase().includes("natuurlijke") && userInput.toLowerCase().includes("selectie")) {
				botText += "Natuurlijke selectie is het proces waarbij organismen die het best aangepast zijn aan hun omgeving meer kans hebben om te overleven en zich voort te planten, waardoor hun genen worden doorgegeven aan de volgende generatie.";
            } else if (userInput.toLowerCase().includes("doel") && userInput.toLowerCase().includes("kasteel")) {
				botText += "Kastelen werden gebruikt als verdedigingswerken en residenties voor de adel tijdens de middeleeuwen.";
            } else if (userInput.toLowerCase().includes("waarom") && userInput.toLowerCase().includes("kasteel")) {
				botText += "Kastelen werden gebruikt als verdedigingswerken en residenties voor de adel tijdens de middeleeuwen.";
            } else if (userInput.toLowerCase().includes("oppervlakte") && userInput.toLowerCase().includes("cirkel")) {
				botText += "De formule voor het berekenen van de oppervlakte van een cirkel is pi (π) vermenigvuldigd met de straal van de cirkel in het kwadraat, oftewel A = πr².";
            } else if (userInput.toLowerCase().includes("oppervlakte") && userInput.toLowerCase().includes("rondje")) {
				botText += "De formule voor het berekenen van de oppervlakte van een cirkel is pi (π) vermenigvuldigd met de straal van de cirkel in het kwadraat, oftewel A = πr².";
            } else if (userInput.toLowerCase().includes("omtrek") && userInput.toLowerCase().includes("rondje")) {
				botText += " Omtrek = 2πr, waarbij r de straal van de cirkel is en π (pi) een wiskundige constante is die ongeveer gelijk is aan 3,14. Dus, als je bijvoorbeeld een cirkel hebt met een straal van 5 cm, dan kun je de omtrek berekenen door 2πr in te vullen: Omtrek = 2 x 3,14 x 5 cm = 31,4 cm. De omtrek van deze cirkel is dus 31,4 cm.";
            } else if (userInput.toLowerCase().includes("omtrek") && userInput.toLowerCase().includes("cirkel")) {
				botText += " Omtrek = 2πr, waarbij r de straal van de cirkel is en π (pi) een wiskundige constante is die ongeveer gelijk is aan 3,14. Dus, als je bijvoorbeeld een cirkel hebt met een straal van 5 cm, dan kun je de omtrek berekenen door 2πr in te vullen: Omtrek = 2 x 3,14 x 5 cm = 31,4 cm. De omtrek van deze cirkel is dus 31,4 cm.";
            } else if (userInput.toLowerCase().includes("julia") && userInput.toLowerCase().includes("romeo")) {
				botText += "William Shakespeare schreef het toneelstuk Romeo en Julia.";
            } else if (userInput.toLowerCase().includes("wie") && userInput.toLowerCase().includes("romeo")) {
				botText += "William Shakespeare schreef het toneelstuk Romeo en Julia.";
            } else if (userInput.toLowerCase().includes("vulkaan") && userInput.toLowerCase().includes("berg")) {
				botText += "Een vulkaan is een berg die lava, as en gas uitstoot, terwijl een berg een verhevenheid op het aardoppervlak is die is gevormd door tektonische krachten, erosie of vulkanisme.";
            } else if (userInput.toLowerCase().includes("democratie") && userInput.toLowerCase().includes("dictatuur")) {
				botText += "Wat is het verschil tussen een democratie en een dictatuur? Antwoord: In een democratie hebben burgers inspraak in de besluitvorming door middel van verkiezingen en vrijheid van meningsuiting, terwijl in een dictatuur één persoon of een kleine groep mensen de macht heeft en er weinig tot geen individuele vrijheid is.";   
            } else if (userInput.toLowerCase().includes("democratie") && userInput.toLowerCase().includes("dictator")) {
				botText += "Wat is het verschil tussen een democratie en een dictatuur? Antwoord: In een democratie hebben burgers inspraak in de besluitvorming door middel van verkiezingen en vrijheid van meningsuiting, terwijl in een dictatuur één persoon of een kleine groep mensen de macht heeft en er weinig tot geen individuele vrijheid is.";   
            } else if (userInput.toLowerCase().includes("talen") && userInput.toLowerCase().includes("spreek")) {
				botText += "Ik spreek alleen Nederlands en een klein beetje Engels";
            } else if (userInput.toLowerCase().includes("taal") && userInput.toLowerCase().includes("spreek")) {
				botText += "Ik spreek alleen Nederlands en een klein beetje Engels";
            } else if (userInput.toLowerCase().includes("talen") && userInput.toLowerCase().includes("spreak")) {
				botText += "Ik spreek alleen Nederlands en een klein beetje Engels";
            } else if (userInput.toLowerCase().includes("talen") && userInput.toLowerCase().includes("praat")) {
				botText += "Ik spreek alleen Nederlands en een klein beetje Engels";
            } else if (userInput.toLowerCase().includes("talen") && userInput.toLowerCase().includes("spreken")) {
				botText += "Ik spreek alleen Nederlands en een klein beetje Engels";

                


	} else if (userInput.toLowerCase().includes("kut")) {
				botText += " BrianGPT is nog in ontwikkeling";
            } else if (userInput.toLowerCase().includes("emo")) {
				botText += " Emo's moet je per direct in elkaar slaan en daarna slachten";



    } else {
        botText += "Ik probeer je te begrijpen maar ben nu nog vrij dom";
    }
    var botIndex = 0; // current index of the bot text being typed
    var typingInterval = 50; // interval in milliseconds between typing each character
    var typingTimer = setInterval(function() {
        if (botIndex < botText.length) {
            botResponse.textContent += botText.charAt(botIndex);
            botIndex++;
        } else {
            clearInterval(typingTimer); // stop typing animation after all characters have been typed
        }
    }, typingInterval);

    // clear input field
    document.getElementById("input").value = "";

    // scroll to bottom of chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}
