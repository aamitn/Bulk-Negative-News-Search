
		function changeRadioButtonState(radioButtonId, checked)
		 {
			const radioButton = document.getElementById(radioButtonId);
			radioButton.checked = checked;
		}
		
		$(document).ready(function(){
			
			/* --------------------- Negative News --------------------- */
			
			// Attaching event listeners to nn buttons
			let textFieldsButtons = document.getElementsByClassName('textFields');
			for (let textFieldButton of textFieldsButtons){
				textFieldButton.addEventListener('click', e => searchIndividual(e));
			}
			
			let textFieldsTButtons = document.getElementsByClassName('textFields_t');
			for (let textFieldButton of textFieldsTButtons){
				textFieldButton.addEventListener('click', e => searchIndividual(e));
			}
		
			let textareaFieldsButtons = document.getElementsByClassName('txtaFields');
			for (let textFieldButton of textareaFieldsButtons){
				textFieldButton.addEventListener('click', e => searchSeriesOfEntities(e));
			}
			
			let textareaFieldsButtons1 = document.getElementsByClassName('txtbFields');
			for (let textFieldButton of textareaFieldsButtons1){
				textFieldButton.addEventListener('click', e => searchSeriesOfEntities(e));
			}
			
			let cnSearchButtons = document.getElementsByClassName('cn-search');
			for (let cnSearchButton of cnSearchButtons){
				cnSearchButton.addEventListener('click', e => cnSwap(e));
				// console.log("CN swap triggered");
			}
			
			let esSearchButtons = document.getElementsByClassName('es-search');
			for (let esSearchButton of esSearchButtons){
				esSearchButton.addEventListener('click', e => esSurnames(e));
			}
			
			let ptSearchButtons = document.getElementsByClassName('pt-search');
			for (let ptSearchButton of ptSearchButtons){
				ptSearchButton.addEventListener('click', e => ptSurnames(e));
			}
			
			
			let cnSearchTButtons = document.getElementsByClassName('cn-search_t');
			for (let cnSearchButton of cnSearchTButtons){
				cnSearchButton.addEventListener('click', e => cnSwap(e));
				// console.log("CN swap triggered");
			}
			
			let esSearchTButtons = document.getElementsByClassName('es-search_t');
			for (let esSearchButton of esSearchTButtons){
				esSearchButton.addEventListener('click', e => esSurnames(e));
			}
			
			let ptSearchTButtons = document.getElementsByClassName('pt-search_t');
			for (let ptSearchButton of ptSearchTButtons){
				ptSearchButton.addEventListener('click', e => ptSurnames(e));
			}
			
			
			/* --------------------- END OF NN FEATURE ----------------- */
			
			/* --------------------- Negative News --------------------- */
			class NegativeNewsEntity {
				constructor(name, midname, surname, options_array) {
					this.name = name;
					this.midname = midname;
					this.surname = surname;
					this.options_array = options_array;
				}
				
				openingInstances() {
					// Next script checks whether the middle name has just 1 or more words
					if (this.midname.includes(' ') && this.name !== '' && this.surname !== ''){
						let midnameArray = this.midname.split(' ');
						for (let option of this.options_array){
							// This opens the NN search with the comprehensive full name
							window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
							window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
							// This loops through the midnameArray and opens the several alternatives
							for (let singleMidname of midnameArray)
							{
								window.open(openTabsNN(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');

								//window.open(openTabsNN(option, '', singleMidname, this.surname), '_blank');
							}
						}
					} else if (this.name !== '' && this.surname !== ''){
						// This block processes a midname made up of a single word
						for (let option of this.options_array){
						//	window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
						if(this.midname.length > 0)
							window.open(openTabsNN(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
						else
							window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
	
							if (this.midname !== '') {
								window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
								//window.open(openTabsNN(option, '', this.midname, this.surname), '_blank');
							} 
						}
					} else if (this.name !== '' && this.midname === 'fi') {
						for (let option of this.options_array){
							window.open(openTabsNN(option, this.name, '', ''), '_blank');
						}
					} else {
						alert("No input: the individual's name and surname are required fields");
					}
				}
				openingInstancesES() {
					// Next script checks whether the middle name has just 1 or more words
					if (this.midname.includes(' ') && this.name !== '' && this.surname !== ''){
						let midnameArray = this.midname.split(' ');
						for (let option of this.options_array){
							// This opens the NN search with the comprehensive full name
							window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
							window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
							// This loops through the midnameArray and opens the several alternatives
							for (let singleMidname of midnameArray)
							{
								window.open(openTabsNN(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');

								//window.open(openTabsNN(option, '', singleMidname, this.surname), '_blank');
							}
						}
					} else if (this.name !== '' && this.surname !== ''){
						// This block processes a midname made up of a single word
						for (let option of this.options_array){
						//	window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
						if(this.midname.length > 0)
							window.open(openTabsNN(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
						else
							window.open(openTabsNN(option, this.name, '', this.surname), '_blank'); // ABC + ABCD
							//window.open(openTabsNN(option, this.name.split(" ")[1], '', this.surname), '_blank');
							if (this.name.split(" ")[0] !== this.name) {
								window.open(openTabsNN(option, this.name.split(" ")[0], '', this.surname), '_blank'); // AC and ACD
							}
							if (this.midname !== '') {
								//window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
								//window.open(openTabsNN(option, '', this.midname, this.surname), '_blank');
							} 
						}
					} else if (this.name !== '' && this.midname === 'fi') {
						for (let option of this.options_array){
							window.open(openTabsNN(option, this.name, '', ''), '_blank');
						}
					} else {
						alert("No input: the individual's name and surname are required fields");
					}
				}
				
				openingInstancesES_t() {
					// Next script checks whether the middle name has just 1 or more words
					if (this.midname.includes(' ') && this.name !== '' && this.surname !== ''){
						let midnameArray = this.midname.split(' ');
						for (let option of this.options_array){
							// This opens the NN search with the comprehensive full name
							if( document.getElementById("langdetect").checked ){
								window.open(openTabsNN2(option, this.name, this.midname, this.surname), '_blank');
								window.open(openTabsNN2(option, this.name, '', this.surname), '_blank');
							} else {
								window.open(openTabsNN1(option, this.name, this.midname, this.surname), '_blank');
								window.open(openTabsNN1(option, this.name, '', this.surname), '_blank');
							}
							// This loops through the midnameArray and opens the several alternatives
							for (let singleMidname of midnameArray)
							{
								if( document.getElementById("langdetect").checked ){
									window.open(openTabsNN2(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');
								} else {
									window.open(openTabsNN1(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');
								}
								//window.open(openTabsNN(option, '', singleMidname, this.surname), '_blank');
							}
						}
					} else if (this.name !== '' && this.surname !== ''){
						// This block processes a midname made up of a single word
						for (let option of this.options_array){
						//	window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
							if(this.midname.length > 0) {
								if( document.getElementById("langdetect").checked ){
									window.open(openTabsNN2(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
								} else {
									window.open(openTabsNN1(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
								}
							} else {
								if( document.getElementById("langdetect").checked ){
									window.open(openTabsNN2(option, this.name, '', this.surname), '_blank'); // ABC + ABCD
									//window.open(openTabsNN(option, this.name.split(" ")[1], '', this.surname), '_blank');
									if (this.name.split(" ")[0] !== this.name) {
										window.open(openTabsNN2(option, this.name.split(" ")[0], '', this.surname), '_blank'); // AC and ACD
									}
								} else {
									window.open(openTabsNN1(option, this.name, '', this.surname), '_blank'); // ABC + ABCD
									//window.open(openTabsNN(option, this.name.split(" ")[1], '', this.surname), '_blank');
									if (this.name.split(" ")[0] !== this.name) {
										window.open(openTabsNN1(option, this.name.split(" ")[0], '', this.surname), '_blank'); // AC and ACD
									}
								}
								if (this.midname !== '') {
									//window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
									//window.open(openTabsNN(option, '', this.midname, this.surname), '_blank');
								} 
							}
						}
					} else if (this.name !== '' && this.midname === 'fi') {
						for (let option of this.options_array){
							if( document.getElementById("langdetect").checked ){
								window.open(openTabsNN2(option, this.name, '', ''), '_blank');
							} else {
								window.open(openTabsNN1(option, this.name, '', ''), '_blank');
							}
						}
					} else {
						alert("No input: the individual's name and surname are required fields");
					}
				}
				
				openingInstancesPT_t() {
					// Next script checks whether the middle name has just 1 or more words
					if (this.midname.includes(' ') && this.name !== '' && this.surname !== ''){
						// console.log("If clause 1");
						let midnameArray = this.midname.split(' ');
						for (let option of this.options_array){
							// This opens the NN search with the comprehensive full name
							if( document.getElementById("langdetect").checked ){
								window.open(openTabsNN2(option, this.name, this.midname, this.surname), '_blank');
								window.open(openTabsNN2(option, this.name, '', this.surname), '_blank');
							} else {
								window.open(openTabsNN1(option, this.name, this.midname, this.surname), '_blank');
								window.open(openTabsNN1(option, this.name, '', this.surname), '_blank');
							}
							// This loops through the midnameArray and opens the several alternatives
							for (let singleMidname of midnameArray)
							{
								if( document.getElementById("langdetect").checked ){
									window.open(openTabsNN2(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');
								} else {
									window.open(openTabsNN1(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');
								}
								//window.open(openTabsNN(option, '', singleMidname, this.surname), '_blank');
							}
						}
					} else if (this.name !== '' && this.surname !== ''){
						// console.log("If clause 2"); // ACD
						// This block processes a midname made up of a single word
						for (let option of this.options_array){
						//	window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
						if(this.midname.length > 0) {
							if( document.getElementById("langdetect").checked ){
								window.open(openTabsNN2(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
							} else {
								window.open(openTabsNN1(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
							}
						} else {
							if( document.getElementById("langdetect").checked ){
								window.open(openTabsNN2(option, this.name, '', this.surname), '_blank'); // ABD
								//window.open(openTabsNN(option, this.name.split(" ")[1], '', this.surname), '_blank');
								if (this.name.split(" ")[0] !== this.name) {
									window.open(openTabsNN2(option, this.name.split(" ")[0], '', this.surname), '_blank'); // AD
								}
							} else {
								window.open(openTabsNN1(option, this.name, '', this.surname), '_blank'); // ABD
								//window.open(openTabsNN(option, this.name.split(" ")[1], '', this.surname), '_blank');
								if (this.name.split(" ")[0] !== this.name) {
									window.open(openTabsNN1(option, this.name.split(" ")[0], '', this.surname), '_blank'); // AD
								}
							}
	
							if (this.midname !== '') {
								//window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
								//window.open(openTabsNN(option, '', this.midname, this.surname), '_blank');
							}
						}
						}
					} else if (this.name !== '' && this.midname === 'fi') {
						// console.log("If clause 3");
						for (let option of this.options_array){
							if( document.getElementById("langdetect").checked ){
								window.open(openTabsNN2(option, this.name, '', ''), '_blank');
							} else {
								window.open(openTabsNN1(option, this.name, '', ''), '_blank');
							}
						}
					} else {
						alert("No input: the individual's name and surname are required fields");
					}
				}
				
				openingInstancesPT() {
					// Next script checks whether the middle name has just 1 or more words
					if (this.midname.includes(' ') && this.name !== '' && this.surname !== ''){
						// console.log("If clause 1");
						let midnameArray = this.midname.split(' ');
						for (let option of this.options_array){
							// This opens the NN search with the comprehensive full name
							window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
							window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
							// This loops through the midnameArray and opens the several alternatives
							for (let singleMidname of midnameArray)
							{
								window.open(openTabsNN(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');

								//window.open(openTabsNN(option, '', singleMidname, this.surname), '_blank');
							}
						}
					} else if (this.name !== '' && this.surname !== ''){
						// console.log("If clause 2"); // ACD
						// This block processes a midname made up of a single word
						for (let option of this.options_array){
						//	window.open(openTabsNN(option, this.name, this.midname, this.surname), '_blank');
						if(this.midname.length > 0) {
							window.open(openTabsNN(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
						} else {
							window.open(openTabsNN(option, this.name, '', this.surname), '_blank'); // ABD
							//window.open(openTabsNN(option, this.name.split(" ")[1], '', this.surname), '_blank');
							if (this.name.split(" ")[0] !== this.name) {
								window.open(openTabsNN(option, this.name.split(" ")[0], '', this.surname), '_blank'); // AD
							}
	
							if (this.midname !== '') {
								//window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
								//window.open(openTabsNN(option, '', this.midname, this.surname), '_blank');
							}
						}
						}
					} else if (this.name !== '' && this.midname === 'fi') {
						// console.log("If clause 3");
						for (let option of this.options_array){
							window.open(openTabsNN(option, this.name, '', ''), '_blank');
						}
					} else {
						alert("No input: the individual's name and surname are required fields");
					}
				}
				
					openingInstances1() {
					// Next script checks whether the middle name has just 1 or more words
					if (this.midname.includes(' ') && this.name !== '' && this.surname !== ''){
						let midnameArray = this.midname.split(' ');
						for (let option of this.options_array){
							// This opens the NN search with the comprehensive full name
							//console.log("A: Opened search for" + this.name + " " + this.midname + " " + this.surname);
							window.open(openTabsNN1(option, this.name, this.midname, this.surname), '_blank');
							//console.log("B: Opened search for" + this.name + " " + this.surname);
							window.open(openTabsNN1(option, this.name, '', this.surname), '_blank');
							// This loops through the midnameArray and opens the several alternatives
							for (let singleMidname of midnameArray){
								console.log("Language: " + option);
								//window.open(openTabsNN1(option, '', singleMidname, this.surname), '_blank'); // From version 2.6
								//console.log("C: Opened search for" + this.name + " " + singleMidname + " " + this.surname);
								if (option === 'en') {
									window.open(openTabsNN(option, this.name, "(" + singleMidname + " | " + singleMidname.charAt(0) + ")", this.surname), '_blank');
								} else {
									window.open(openTabsNN1(option, this.name, singleMidname, this.surname), '_blank');
								}
							}
						}
					} else if (this.name !== '' && this.surname !== ''){
						// This block processes a midname made up of a single word
						for (let option of this.options_array){
							console.log("D: Opened search for " + this.name + " " + this.midname + " " + this.surname);
							if (option === 'en' && this.midname !== '') {
									window.open(openTabsNN(option, this.name, "(" + this.midname + " | " + this.midname.charAt(0) + ")", this.surname), '_blank');
								} else {
									window.open(openTabsNN1(option, this.name, this.midname, this.surname), '_blank');
								}
							if (this.midname !== '') {
								console.log("E: Opened search for " + this.name + " " + this.surname);
								window.open(openTabsNN1(option, this.name, '', this.surname), '_blank');
								//window.open(openTabsNN1(option, '', this.midname, this.surname), '_blank'); // From version 2.6
								// console.log("F: Opened search for" + this.name + " " + this.midname + " " + this.surname);
								// window.open(openTabsNN1(option, this.name, this.midname, this.surname), '_blank');
							} 
						}
					} else if (this.name !== '' && this.midname === 'fi') {
						for (let option of this.options_array){
							window.open(openTabsNN1(option, this.name, '', ''), '_blank');
						}
					} else {
						alert("No input: the individual's name and surname are required fields");
					}
				}
				
					openingInstances2() {
					// Next script checks whether the middle name has just 1 or more words
					if (this.midname.includes(' ') && this.name !== '' && this.surname !== ''){
						let midnameArray = this.midname.split(' ');
						for (let option of this.options_array){
							// This opens the NN search with the comprehensive full name
							window.open(openTabsNN2(option, this.name, this.midname, this.surname), '_blank');
							window.open(openTabsNN2(option, this.name, '', this.surname), '_blank');
							// This loops through the midnameArray and opens the several alternatives
							for (let singleMidname of midnameArray){
								window.open(openTabsNN2(option, this.name, singleMidname, this.surname), '_blank');
							}
						}
					} else if (this.name !== '' && this.surname !== ''){
						// This block processes a midname made up of a single word
						for (let option of this.options_array){
							window.open(openTabsNN2(option, this.name, this.midname, this.surname), '_blank');
							if (this.midname !== '') {
								window.open(openTabsNN2(option, this.name, '', this.surname), '_blank');
								// window.open(openTabsNN2(option, '', this.midname, this.surname), '_blank');
							} 
						}
					} else if (this.name !== '' && this.midname === 'fi') {
						for (let option of this.options_array){
							window.open(openTabsNN2(option, this.name, '', ''), '_blank');
						}
					} else {
						alert("No input: the individual's name and surname are required fields");
					}
				}
				
				
				cn_swap_t() {
					if (this.name !== '' && this.surname !== ''){
						for (let option of this.options_array){
							if( document.getElementById("langdetect").checked ){
								window.open(openTabsNN2(option, this.surname, '', this.name), '_blank')
							} else {
								window.open(openTabsNN1(option, this.surname, '', this.name), '_blank');
							}
						}
					} else {
						alert("No input: The individual's name and surname are required fields");
					}
				}
				
				cn_swap() {
					if (this.name !== '' && this.surname !== ''){
						for (let option of this.options_array){
							//window.open(openTabsNN(option, this.name, '', this.surname), '_blank');
							window.open(openTabsNN(option, this.surname, '', this.name), '_blank');
						}
					} else {
						alert("No input: The individual's name and surname are required fields");
					}
				}
			}
			

			
			
			
			
			/* --------------------- END OF NN FEATURE ----------------- */
			
			// Processes tabs parameters via switch
			function openTabs(option, mainParameter, optionalParameter, region){
				
				let tab = '';
				
				switch (option) {
					case 'triton_oid':
						tab = `https://nautilus-${region}.amazon-corp.com/search/bri-search-customers-by-order-id/${mainParameter}`;
						break;
					case 'paragon_oid':
						tab = `https://paragon-${region}.amazon.com/hz//view-investigation-lookup?lookupType=orderId&encryptedMarketplaceId=ATVPDKIKX0DER&lookupQuery=${mainParameter}`;
						break;
					case 'triton_cid':
						tab = `https://nautilus-${region}.amazon-corp.com/search/bri-search-by-customer-id/${optionalParameter}`;
						break;
					case 'rccs_cid':
						tab = `https://nautilus-${region}.amazon-corp.com/search/sam-search-scope-customer-id/${optionalParameter}`;
						break;
					case 'triton_sid':
						tab = `https://nautilus-${region}.amazon-corp.com/search/bri-search-by-customer-id/${mainParameter}`;
						break;
					case 'kyc_sid':
						tab = `https://nautilus-${region}.amazon-corp.com/search/calypso-search-scope-customer-id/${mainParameter}`;
						break;
					case 'paragon_sid':
						tab = `https://paragon-${region}.amazon.com/hz/view-investigation-lookup?lookupQuery=${mainParameter}&lookupType=sellerCustomerId&encryptedMarketplaceId=${optionalParameter}`;
						break;
					case 'cameu_sid':
						// Camshaft Explicit Mapping for AAPH -> Camshaft JP
						let entity = document.getElementById("entity");
						if( entity.options[entity.selectedIndex].text === "AAPH" )
							tab = `https://camweb-jp.amazon.com/accountholder/${mainParameter}`;
						else
							tab = `https://camweb-${region}.amazon.com/accountholder/${mainParameter}`;
						break;
					case 'uni_sid':
						tab = `https://unicorn-dashboard-eu-dub.dub.proxy.amazon.com/viewSeller.htm?merchantCustomerId=${mainParameter}`;
						break;
					case 'simple_product_data_view':
						tab = `https://csi.amazon.com/view?view=${option}&item_id=${mainParameter}&marketplace_id=${optionalParameter}&customer_id=&merchant_id=&sku=&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show`;
						break;
					case 'asin_creator':
						tab = `https://csi.amazon.com/view?view=${option}&item_id=${mainParameter}&marketplace_id=${optionalParameter}&customer_id=&merchant_id=&sku=&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show`;
						break;
				}
				
				return tab
			
			}
			
			/* --------------------- Negative News --------------------- */
			// Processes NN tabs parameters via switch
			function openTabsNN(lang, name, midname, surname){
				
				var tld = document.querySelector('input[name="tld-option"]:checked').value;
				console.log ("TLD IS:"+tld);
				let tab = '';
				// The following 5 social media sites will be excluded from search results: facebook, twitter, instagram, linkedin, reddit
				let sm_text = '+-site:facebook.*+-site:twitter.*+-site:instagram.*+-site:linkedin.*+-site:reddit.*';
				switch (lang) {
					case 'en':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr`;
						break;
					case 'fr':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+pot-de-vin+OR+fraude+OR+%22blanchiment%22+OR+crime+OR+terrorisme+OR+corruption` + sm_text + `&%2a&cad=h`
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+pot-de-vin+OR+fraude+OR+%22blanchiment%22+OR+crime+OR+terrorisme+OR+corruption` + sm_text + `&%2a&cad=h`
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+pot-de-vin+OR+fraude+OR+%22blanchiment%22+OR+crime+OR+terrorisme+OR+corruption` + sm_text + `&%2a&cad=h`
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+pot-de-vin+OR+fraude+OR+%22blanchiment%22+OR+crime+OR+terrorisme+OR+corruption` + sm_text + `&%2a&cad=h`;
						break;
					//done de
					case 'de':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+Bestechung+OR+betrug+OR+%22Geldw%C3%A4sche%22+OR+Kriminalit%C3%A4t+OR+Terrorismus+OR+Korruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp`
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+Bestechung+OR+betrug+OR+%22Geldw%C3%A4sche%22+OR+Kriminalit%C3%A4t+OR+Terrorismus+OR+Korruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp`
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+Bestechung+OR+betrug+OR+%22Geldw%C3%A4sche%22+OR+Kriminalit%C3%A4t+OR+Terrorismus+OR+Korruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp`
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+Bestechung+OR+betrug+OR+%22Geldw%C3%A4sche%22+OR+Kriminalit%C3%A4t+OR+Terrorismus+OR+Korruption` + sm_text + `&ie=utf-8&oe=utf-8&gws_rd=cr&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp`;
						break;
					case 'es':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+soborno+OR+fraude+OR+%22lavado+de+dinero%22+OR+crimen+OR+terrorismo+OR+corrupci%C3%B3n` + sm_text
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+soborno+OR+fraude+OR+%22lavado+de+dinero%22+OR+crimen+OR+terrorismo+OR+corrupci%C3%B3n` + sm_text
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+soborno+OR+fraude+OR+%22lavado+de+dinero%22+OR+crimen+OR+terrorismo+OR+corrupci%C3%B3n` + sm_text
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+soborno+OR+fraude+OR+%22lavado+de+dinero%22+OR+crimen+OR+terrorismo+OR+corrupci%C3%B3n` + sm_text;
						break;
					case 'pl':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+przekupstwo+OR+oszustwo+OR+%22pranie+pieni%C4%99dzy%22+OR+przest%C4%99pstwo+OR+terroryzm+OR+korupcja` + sm_text
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+przekupstwo+OR+oszustwo+OR+%22pranie+pieni%C4%99dzy%22+OR+przest%C4%99pstwo+OR+terroryzm+OR+korupcja` + sm_text
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+przekupstwo+OR+oszustwo+OR+%22pranie+pieni%C4%99dzy%22+OR+przest%C4%99pstwo+OR+terroryzm+OR+korupcja` + sm_text
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+przekupstwo+OR+oszustwo+OR+%22pranie+pieni%C4%99dzy%22+OR+przest%C4%99pstwo+OR+terroryzm+OR+korupcja` + sm_text;
						break;
					case 'it':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+corruzione+OR+frode+OR+%22riciclaggio%22+OR+crimine+OR+terrorismo+OR+tangenti` + sm_text+ `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+corruzione+OR+frode+OR+%22riciclaggio%22+OR+crimine+OR+terrorismo+OR+tangenti` + sm_text+ `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+corruzione+OR+frode+OR+%22riciclaggio%22+OR+crimine+OR+terrorismo+OR+tangenti` + sm_text+ `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+corruzione+OR+frode+OR+%22riciclaggio%22+OR+crimine+OR+terrorismo+OR+tangenti` + sm_text+ `&ie=utf-8&oe=utf-8&gws_rd=cr`;
						break;
					case 'se':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+bestickning+OR+bedr%C3%A4geri+OR+pengatv%C3%A4tt+OR+brottslighet+OR+terrorism+OR+korruption` + sm_text
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+bestickning+OR+bedr%C3%A4geri+OR+pengatv%C3%A4tt+OR+brottslighet+OR+terrorism+OR+korruption` + sm_text
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bestickning+OR+bedr%C3%A4geri+OR+pengatv%C3%A4tt+OR+brottslighet+OR+terrorism+OR+korruption` + sm_text
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bestickning+OR+bedr%C3%A4geri+OR+pengatv%C3%A4tt+OR+brottslighet+OR+terrorism+OR+korruption` + sm_text;
						break;
					case 'nl':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+omkoping+OR+fraude+OR+%22geld+witwassen%22+OR+misdrijf+OR+terrorisme+OR+corruptie+OR+criminaliteit` + sm_text
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+omkoping+OR+fraude+OR+%22geld+witwassen%22+OR+misdrijf+OR+terrorisme+OR+corruptie+OR+criminaliteit` + sm_text
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+omkoping+OR+fraude+OR+%22geld+witwassen%22+OR+misdrijf+OR+terrorisme+OR+corruptie+OR+criminaliteit` + sm_text
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+omkoping+OR+fraude+OR+%22geld+witwassen%22+OR+misdrijf+OR+terrorisme+OR+corruptie+OR+criminaliteit` + sm_text;
						break;
					case 'pt':
						tab = (midname === '' && surname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)}%22+bola+OR+propina+OR+estelionato+OR+trapa%C3%A7a+OR+golpe+OR+fraude+OR+%22lavagem+de+dinheiro%22+OR+%22branqueamento+de+capitais%22+OR+%22pir%C3%A2mide+financeira%22+OR+crime+OR+terrorismo+OR+corrup%C3%A7%C3%A3o` + sm_text
						: (midname === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+bola+OR+propina+OR+estelionato+OR+trapa%C3%A7a+OR+golpe+OR+fraude+OR+%22lavagem+de+dinheiro%22+OR+%22branqueamento+de+capitais%22+OR+%22pir%C3%A2mide+financeira%22+OR+crime+OR+terrorismo+OR+corrup%C3%A7%C3%A3o` + sm_text
						: (name === '') ? `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bola+OR+propina+OR+estelionato+OR+trapa%C3%A7a+OR+golpe+OR+fraude+OR+%22lavagem+de+dinheiro%22+OR+%22branqueamento+de+capitais%22+OR+%22pir%C3%A2mide+financeira%22+OR+crime+OR+terrorismo+OR+corrup%C3%A7%C3%A3o` + sm_text
						: `https://www.google.`+tld+`/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bola+OR+propina+OR+estelionato+OR+trapa%C3%A7a+OR+golpe+OR+fraude+OR+%22lavagem+de+dinheiro%22+OR+%22branqueamento+de+capitais%22+OR+%22pir%C3%A2mide+financeira%22+OR+crime+OR+terrorismo+OR+corrup%C3%A7%C3%A3o` + sm_text;
						break;
				}
				// console.log(tab)
				return tab
			}
			
			
			
			function openTabsNN1(lang, name, midname, surname)
			{
				let tab = '';
				// The following 5 social media sites will be excluded from search results: facebook, twitter, instagram, linkedin, reddit
				let sm_text_en = '+-site:facebook.*+-site:twitter.*+-site:instagram.*+-site:linkedin.*+-site:reddit.*';
				let sm_text = '%2B-site:facebook.*%2B-site:twitter.*%2B-site:instagram.*%2B-site:linkedin.*%2B-site:reddit.*';

				switch (lang) {
					case 'en':
						tab = (midname === '' && surname === '') ? `https://www.google.ie/search?q=%22${encodeURIComponent(name)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text_en + `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: (midname === '') ? `https://www.google.ie/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(surname)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text_en + `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: (name === '') ? `https://www.google.ie/search?q=%22${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text_en + `&ie=utf-8&oe=utf-8&gws_rd=cr`
						: `https://www.google.ie/search?q=%22${encodeURIComponent(name)} ${encodeURIComponent(midname)} ${encodeURIComponent(surname)}%22+bribery+OR+fraud+OR+%22money+laundering%22+OR+crime+OR+terrorism+OR+corruption` + sm_text_en + `&ie=utf-8&oe=utf-8&gws_rd=cr`;
						break;
					case 'fr':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=fr&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=fr&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=fr&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=fr&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text;
						break;
					case 'de':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=de&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=de&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=de&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=de&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text;
						break;
					case 'es':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=es&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=es&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=es&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=es&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text;
						break;
					case 'pl':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=pl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522{encodeURIComponent(name)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=pl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=pl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=pl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text;
						break;
					case 'it':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=it&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=it&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=it&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=it&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text;
						break;
					case 'se':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=sv&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=sv&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=sv&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=sv&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text;
						break;
					case 'nl':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text;
						break;
					case 'pt':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=pt&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=pt&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=pt&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=pt&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text;
						break;
				}
				// Below ensures no space charaters are in the URLs
				if (lang !== 'en'){
					tab = tab.replace(/%20/g, "%2520");
					tab = tab.replace(/ /g, "%2520");
				}
				// console.log(tab)
				return tab
			}
			
			
		function openTabsNN2(lang, name, midname, surname)
			{

			
				let tab = '';
				// The following 5 social media sites will be excluded from search results: facebook, twitter, instagram, linkedin, reddit
				let sm_text_en = '+-site:facebook.*+-site:twitter.*+-site:instagram.*+-site:linkedin.*+-site:reddit.*';
				let sm_text = '%2B-site:facebook.*%2B-site:twitter.*%2B-site:instagram.*%2B-site:linkedin.*%2B-site:reddit.*';
				switch (lang) {
					case 'en':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bbribery%2BOR%2Bfraud%2BOR%2B%2522money%2Blaundering%2522%2BOR%2Bcrime%2BOR%2Bterrorism%2BOR%2Bcorruption` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bbribery%2BOR%2Bfraud%2BOR%2B%2522money%2Blaundering%2522%2BOR%2Bcrime%2BOR%2Bterrorism%2BOR%2Bcorruption` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbribery%2BOR%2Bfraud%2BOR%2B%2522money%2Blaundering%2522%2BOR%2Bcrime%2BOR%2Bterrorism%2BOR%2Bcorruption` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbribery%2BOR%2Bfraud%2BOR%2B%2522money%2Blaundering%2522%2BOR%2Bcrime%2BOR%2Bterrorism%2BOR%2Bcorruption` + sm_text;
						break;
					case 'fr':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bpot-de-vin%2BOR%2Bfraude%2BOR%2B%2522blanchiment%2522%2BOR%2Bcrime%2BOR%2Bterrorisme%2BOR%2Bcorruption` + sm_text;
						break;
					case 'de':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2BBestechung%2BOR%2Bbetrug%2BOR%2B%2522Geldw%25C3%25A4sche%2522%2BOR%2BKriminalit%25C3%25A4t%2BOR%2BTerrorismus%2BOR%2BKorruption` + sm_text;
						break;
					case 'es':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bsoborno%2BOR%2Bfraude%2BOR%2B%2522lavado%2Bde%2Bdinero%2522%2BOR%2Bcrimen%2BOR%2Bterrorismo%2BOR%2Bcorrupci%25C3%25B3n` + sm_text;
						break;
					case 'pl':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522{encodeURIComponent(name)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bprzekupstwo%2BOR%2Boszustwo%2BOR%2B%2522pranie%2Bpieni%25C4%2599dzy%2522%2BOR%2Bprzest%25C4%2599pstwo%2BOR%2Bterroryzm%2BOR%2Bkorupcja` + sm_text;
						break;
					case 'it':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bcorruzione%2BOR%2Bfrode%2BOR%2B%2522riciclaggio%2522%2BOR%2Bcrimine%2BOR%2Bterrorismo%2BOR%2Btangenti` + sm_text;
						break;
					case 'se':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname)}%2522%2Bbestickning%2BOR%2Bbedr%25C3%25A4geri%2BOR%2Bpengatv%25C3%25A4tt%2BOR%2Bbrottslighet%2BOR%2Bterrorism%2BOR%2Bkorruption` + sm_text;
						break;
					case 'nl':
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname.replace(" ", "+"))}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname.replace(" ", "+"))}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=nl&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname.replace(" ", "+"))}%2522%2Bomkoping%2BOR%2Bfraude%2BOR%2B%2522geld%2Bwitwassen%2522%2BOR%2Bmisdrijf%2BOR%2Bterrorisme%2BOR%2Bcorruptie%2BOR%2Bcriminaliteit` + sm_text;
						break;
					case 'pt': // 
						tab = (midname === '' && surname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text
						: (midname === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(surname.replace(" ", "+"))}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text
						: (name === '') ? `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(midname)}%2520${encodeURIComponent(surname.replace(" ", "+"))}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text
						: `https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https%3A%2F%2Fwww.google.ie%2Fsearch%3Fq%3D%2522${encodeURIComponent(name)}%2520${encodeURIComponent(midname)}%2520${encodeURIComponent(surname.replace(" ", "+"))}%2522%2Bbola%2BOR%2Bpropina%2BOR%2Bestelionato%2BOR%2Btrapa%C3%A7a%2BOR%2Bgolpe%2BOR%2Bfraude%2BOR%2B%2522lavagem%2Bde%2Bdinheiro%2522%2BOR%2B%2522branqueamento%2Bde%2Bcapitais%2522%2BOR%2B%2522pir%C3%A2mide%2Bfinanceira%2522%2BOR%2Bcrime%2BOR%2Bterrorismo%2BOR%2Bcorrup%C3%A7%C3%A3o` + sm_text;
						break;
				}
				// Below ensures no space charaters are in the URLs
				tab = tab.replace(/%20/g, "%2520");
				tab = tab.replace(/ /g, "%2520");
				// console.log(tab)
				return tab
			}
			
			
			
			/* --------------------- END OF NN FEATURE ----------------- */

		
			
			/* --------------------- Negative News --------------------- */
			// Perform NN tabs opening for the POC, BO, and legrep
			function searchIndividual(event){
				
				let name = '';
				let midname = '';
				let surname = '';
				let languages = [];
				
				switch (event.target.id){
					case 'search_multiple_surnames':
						var form = new FormData(document.getElementById('specialSc'));
						break;
					case 'search_multiple_surnames_t':
						var form = new FormData(document.getElementById('specialSc'));
						break;
				}
				
				// Clears and arranges inputs into separate items
				for (let entry of form.entries()){
					console.log(entry);
					if (entry[0] === 'name' && entry[1] !== '') {
						name = entry[1].trim();
					} else if (entry[0] === 'midname' && entry[1] !== '') {
						midname = entry[1].trim();
					} else if (entry[0] === 'surname' && entry[1] !== '') {
						surname = entry[1].trim();
					}
				}
				
				// Gets lang preferences into the array
				let languagesHTML = document.querySelectorAll('.languages input');
				for (let preference of languagesHTML){
					if (preference.checked){
						languages.push(preference.id);
					}
				}
				
				
				// console.log(`Name: ${name}, Middle Name: ${midname}, Surname: ${surname}, Options array: ${languages}`);
				
				// CLASS Refactoring START
				//let individual = new NegativeNewsEntity(name, midname, surname, languages);
				//individual.openingInstances();
				// CLASS Refactoring END
				if (event.target.id === 'search_multiple_surnames') {
					let individual = new NegativeNewsEntity(name, midname, surname, languages);
					individual.openingInstances(); 
				} else if (event.target.id === 'search_multiple_surnames_t'){
					let individual = new NegativeNewsEntity(name, midname, surname, languages);
					if( document.getElementById("langdetect").checked ){
						individual.openingInstances2();
					} else {
						individual.openingInstances1();
					}
				} 
			}
			
			/* --------------------- END OF NN FEATURE ----------------- */
			
			/* --------------------- Negative News --------------------- */
			// Perform NN tabs opening for the SUs, FI, and biz
			function searchSeriesOfEntities(event){
				
				let entitiesArray = [];
				let languages = [];
				
				switch (event.target.id){
					case 'search_sus':
						var form = new FormData(document.getElementById('sus_form'));
						break;
					case 'search_susa':
						var form = new FormData(document.getElementById('sus_form'));
						break;
					case 'search_fi':
						var form = new FormData(document.getElementById('fi_form'));
						break;
					case 'search_fia':
						var form = new FormData(document.getElementById('fi_form'));
						break;
				}
				
				// Clears and arranges inputs into separate items
				for (let entry of form.entries()){
					if (entry[0] === 'sus_names' && entry[1] !== '') {
						entitiesArray = entry[1].split('\n').map(single => single.trim()).filter(entity => entity != '\n' && entity != '');
					} else if (entry[0] === 'fi_names' && entry[1] !== '') {
						entitiesArray = entry[1].split('\n').map(single => single.trim()).filter(entity => entity != '\n' && entity != '');
					} else if (entry[0] === 'biz_name' && entry[1] !== '') {
						entitiesArray = entry[1].trim();
					} else {
						alert('No input');
					}
				}
				
				// Gets lang preferences into the array
				let languagesHTML = document.querySelectorAll('.languages input');
				for (let preference of languagesHTML){
					if (preference.checked){
						languages.push(preference.id);
					}
				}
				
				if (entitiesArray !== [] && event.target.id === 'search_fi') {
					
					for (let entity of entitiesArray) {				
						let fiEntity = new NegativeNewsEntity(entity, 'fi', '', languages);
						fiEntity.openingInstances();
					} 
				} else if (entitiesArray !== [] && event.target.id === 'search_fia'){
					
					for (let entity of entitiesArray) {				
						let fiEntity = new NegativeNewsEntity(entity, 'fi', '', languages);
						if( document.getElementById("langdetect").checked ) {
							fiEntity.openingInstances2();
						} else {
							fiEntity.openingInstances1();
						}
					} 
				} else if (entitiesArray !== [] && event.target.id === 'search_sus'){
					
					for (let entity of entitiesArray) {
						console.log('You clicked the Basic Search button!');						
						console.log('Entity: ' + entity);
						
						let suSingleNamesArray = entity.split(' ');
						let surname = suSingleNamesArray[suSingleNamesArray.length - 1];
						let forename = suSingleNamesArray[0];
						let midname = [];
						
						if (suSingleNamesArray.length >= 2){
							
							for (let i = 1; i < suSingleNamesArray.length - 1 && suSingleNamesArray.length > 2; i++){
								midname.push(suSingleNamesArray[i]);
							}
							
							// console.log(`Variables passed into the object. Lunghezza del nome completo: ${suSingleNamesArray.length}, Nome: ${forename}, secondi nomi: ${midname.join(' ')}, cognome: ${surname}`);
							let suEntity = (suSingleNamesArray.length > 2) ? new NegativeNewsEntity(forename, midname.join(' '), surname, languages)
							: new NegativeNewsEntity(forename, '', surname, languages);
							// console.log('Prima del metodo: ', suEntity.name, suEntity.midname, suEntity.surname);
							suEntity.openingInstances();
							// console.log('Dopo il metodo: ', suEntity.name, suEntity.midname, suEntity.surname);
						} else {
							alert('Missing input');
						}
						console.log(`Name: ${name}, Middle Name: ${midname}, Surname: ${surname}, Options array: ${languages}`);
					} 
				}
				
				else if (entitiesArray !== [] && event.target.id === 'search_susa'){
					
					for (let entity of entitiesArray) {
						console.log('You clicked the Translate Search button!');
						console.log('Entity: ' + entity);
						
						let suSingleNamesArray = entity.split(' ');
						let surname = suSingleNamesArray[suSingleNamesArray.length - 1];
						let forename = suSingleNamesArray[0];
						let midname = [];
						
						if (suSingleNamesArray.length >= 2){
							
							for (let i = 1; i < suSingleNamesArray.length - 1 && suSingleNamesArray.length > 2; i++){
								midname.push(suSingleNamesArray[i]);
							}
							
							// console.log(`Variables passed into the object. Lunghezza del nome completo: ${suSingleNamesArray.length}, Nome: ${forename}, secondi nomi: ${midname.join(' ')}, cognome: ${surname}`);
							let suEntity = (suSingleNamesArray.length > 2) ? new NegativeNewsEntity(forename, midname.join(' '), surname, languages)
							: new NegativeNewsEntity(forename, '', surname, languages);
							// console.log('Prima del metodo: ', suEntity.name, suEntity.midname, suEntity.surname);
							if( document.getElementById("langdetect").checked ) {
								suEntity.openingInstances2();
							} else {
								suEntity.openingInstances1();
							}
							// console.log('Dopo il metodo: ', suEntity.name, suEntity.midname, suEntity.surname);
						} else {
							alert('Error : Missing Input - Last Name');
						}
						console.log(`Name: ${forename}, Middle Name: ${midname}, Surname: ${surname}, Options array: ${languages}`);
					} 
				}
			}
			
			/* --------------------- END OF NN FEATURE ----------------- */
			
			/* --------------------- Negative News --------------------- */
			function cnSwap(event){
				
				let name = '';
				let surname = '';
				let languages = [];
				
				switch (event.target.id){
					case 'search_CN_swap':
						var form = new FormData(document.getElementById('specialScCN'));
						break;
					case 'search_CN_swap_t':
						var form = new FormData(document.getElementById('specialScCN'));
						break;
				}
				
				// Clears and arranges inputs into separate items
				for (let entry of form.entries()){
					// console.log(entry);
					if (entry[0] === 'name' && entry[1] !== '') {
						name = entry[1].trim();
					} else if (entry[0] === 'surname' && entry[1] !== '') {
						surname = entry[1].trim();
					}
				}
				
				// Gets lang preferences into the array
				let languagesHTML = document.querySelectorAll('.languages input');
				
				for (let preference of languagesHTML){
					if (preference.checked){
						languages.push(preference.id);
					}
				}
				
				// console.log(`Name: ${name}, Surname: ${surname}, Options array: ${languages}`);
				
				// CLASS Refactoring START
				if (event.target.id === 'search_CN_swap'){
					let individual = new NegativeNewsEntity(name, '', surname, languages);
					individual.cn_swap();
				} else if (event.target.id === 'search_CN_swap_t'){
					let individual = new NegativeNewsEntity(name, '', surname, languages);
					individual.cn_swap_t();
				}
				// CLASS Refactoring END
			}
			
			/* --------------------- END OF NN FEATURE ----------------- */
			
			function esSurnames(event){
			
				const person = {
					name: '',
					midname: '',
					fstapellido: '',
					sndapellido: '',
					surname: function() {
						if(this.fstapellido !== '' && this.sndapellido !== ''){
							return this.fstapellido + " " + this.sndapellido;
						} else if (this.fstapellido !== '') {
							return this.fstapellido;
						} else if (this.sndapellido !== '') {
							return this.sndapellido;
						} else {
							return '';
						}
					}
				}
				let languages = [];
				
				// var form = new FormData(document.getElementById('specialScES'));
				
				switch (event.target.id){
					case 'search_ES_apellidos':
						var form = new FormData(document.getElementById('specialScES'));
						break;
					case 'search_ES_apellidos_t':
						var form = new FormData(document.getElementById('specialScES'));
						break;
				}
				
				
				// Clears and arranges inputs into separate items
				for (let entry of form.entries()){
					// console.log(entry);
					if (entry[0] === 'name' && entry[1] !== '') {
						person.name = entry[1].trim();
					} else if (entry[0] === 'midname' && entry[1] !== '') {
						person.midname = entry[1].trim();
					} else if (entry[0] === 'surname1' && entry[1] !== '') {
						person.fstapellido = entry[1].trim();
					} else if (entry[0] === 'surname2' && entry[1] !== '') {
						person.sndapellido = entry[1].trim();
					}
				}
				
				// Gets lang preferences into the array
				let languagesHTML = document.querySelectorAll('.languages input');
				for (let preference of languagesHTML){
					if (preference.checked){
						languages.push(preference.id);
					}
				}
				
				//console.log(`Name: ${person.name}, Middle Name: ${person.midname}, Surname: ${person.surname()}, Options array: ${languages}`);
				
				// CLASS Refactoring START
				if (event.target.id === 'search_ES_apellidos'){
					console.log("Opening basic");
					if (person.fstapellido !== '' && person.sndapellido !== ''){
						let individual = new NegativeNewsEntity(person.name, person.midname, person.surname(), languages);
						individual.openingInstancesES();
						//let individual1 = new NegativeNewsEntity(person.name,  person.surname(), languages);
						//individual1.openingInstances();
						let individualFstApellido = new NegativeNewsEntity(person.name, person.midname, person.fstapellido, languages);
						individualFstApellido.openingInstancesES();
					} else if (person.fstapellido !== '' && person.sndapellido === ''){
						alert("Missing apellido. Please, fill both apellidos fields, or use the NPs form above.");
					} else if (person.sndapellido !== '' && person.fstapellido === ''){
						alert("Missing apellido. Please, fill both apellidos fields, or use the NPs form above.");
					} else {
						alert("Missing both apellidos");
					}
				} else if (event.target.id === 'search_ES_apellidos_t'){
					console.log("Opening translated");
					if (person.fstapellido !== '' && person.sndapellido !== ''){
						let individual = new NegativeNewsEntity(person.name, person.midname, person.surname(), languages);
						individual.openingInstancesES_t();
						//let individual1 = new NegativeNewsEntity(person.name,  person.surname(), languages);
						//individual1.openingInstances();
						let individualFstApellido = new NegativeNewsEntity(person.name, person.midname, person.fstapellido, languages);
						individualFstApellido.openingInstancesES_t();
					} else if (person.fstapellido !== '' && person.sndapellido === ''){
						alert("Missing apellido. Please, fill both apellidos fields, or use the NPs form above.");
					} else if (person.sndapellido !== '' && person.fstapellido === ''){
						alert("Missing apellido. Please, fill both apellidos fields, or use the NPs form above.");
					} else {
						alert("Missing both apellidos");
					}
				}
				// CLASS Refactoring END
			}
			
			function ptSurnames(event){
			
				const ptperson = {
					name: '',
					midname: '',
					fstsobrenome: '',
					sndsobrenome: '',
					surname: function() {
						if(this.fstsobrenome !== '' && this.sndsobrenome !== ''){
							return this.fstsobrenome + " " + this.sndsobrenome;
						} else if (this.fstsobrenome !== '') {
							return this.fstsobrenome;
						} else if (this.sndsobrenome !== '') {
							return this.sndsobrenome;
						} else {
							return '';
						}
					}
				}
				let languages = [];
				
				switch (event.target.id){
					case 'search_PT_sobrenomes':
						var form = new FormData(document.getElementById('specialScPT'));
						break;
					case 'search_PT_sobrenomes_t':
						var form = new FormData(document.getElementById('specialScPT'));
						break;
				}
				//var form = new FormData(document.getElementById('specialScPT'));
				
				// Clears and arranges inputs into separate items
				for (let entry of form.entries()){
					// console.log(entry);
					if (entry[0] === 'name' && entry[1] !== '') {
						ptperson.name = entry[1].trim();
					} else if (entry[0] === 'midname' && entry[1] !== '') {
						ptperson.midname = entry[1].trim();
					} else if (entry[0] === 'ptsurname1' && entry[1] !== '') {
						ptperson.fstsobrenome = entry[1].trim();
					} else if (entry[0] === 'ptsurname2' && entry[1] !== '') {
						ptperson.sndsobrenome = entry[1].trim();
					}
				}
				
				// Gets lang preferences into the array
				let languagesHTML = document.querySelectorAll('.languages input');
				for (let preference of languagesHTML){
					if (preference.checked){
						languages.push(preference.id);
					}
				}
				
				// console.log(`Name: ${ptperson.name}, Middle Name: ${ptperson.midname}, Surname: ${ptperson.surname()}, Options array: ${languages}`);
				
				// CLASS Refactoring START
				if (event.target.id === 'search_PT_sobrenomes'){
					// console.log("Entering search_PT_sobrenomes");
					if (ptperson.fstsobrenome !== '' && ptperson.sndsobrenome !== ''){
						//let individual = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.surname(), languages);
						//individual.openingInstancesPT(); // ABCD and ACD
						let individualFullName = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.surname(), languages);
						individualFullName.openingInstances(); // ABCD
						// console.log("Searching ABCD");
						let individualSndSobrenome = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.sndsobrenome, languages);
						individualSndSobrenome.openingInstancesPT(); // ABD and AD
						// console.log("Searching ABD and AD");
						//let individualFstSobrenome = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.fstsobrenome, languages);
						//individualFstSobrenome.openingInstances(); // ABC
					} else if (ptperson.fstsobrenome !== '' && ptperson.sndsobrenome === ''){
						alert("Missing sobrenome. Please, fill both sobrenomes fields, or use the NPs form above.");
					} else if (ptperson.sndapellido !== '' && ptperson.fstapellido === ''){
						alert("Missing sobrenome. Please, fill both sobrenomes fields, or use the NPs form above.");
					} else {
						alert("Missing both sobrenomes");
					}
				} else if (event.target.id === 'search_PT_sobrenomes_t') {
					// console.log("Entering search_PT_sobrenomes_t");
					if (ptperson.fstsobrenome !== '' && ptperson.sndsobrenome !== ''){
						//let individual = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.surname(), languages);
						//individual.openingInstancesPT(); // ABCD and ACD
						let individualFullName = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.surname(), languages);
						if( document.getElementById("langdetect").checked ){
							individualFullName.openingInstances2(); // ABCD
							// console.log("Searching ABCD - openingInstances2");
						} else {
							individualFullName.openingInstances1(); // ABCD
							// console.log("Searching ABCD - openingInstances1");
						}
						// individualFullName.openingInstances(); // ABCD
						let individualSndSobrenome = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.sndsobrenome, languages);
						individualSndSobrenome.openingInstancesPT_t(); // ABD and AD
						// console.log("Searching ABD and AD - openingInstancesPT_t");
						//let individualFstSobrenome = new NegativeNewsEntity(ptperson.name, ptperson.midname, ptperson.fstsobrenome, languages);
						//individualFstSobrenome.openingInstances(); // ABC
					} else if (ptperson.fstsobrenome !== '' && ptperson.sndsobrenome === ''){
						alert("Missing sobrenome. Please, fill both sobrenomes fields, or use the NPs form above.");
					} else if (ptperson.sndapellido !== '' && ptperson.fstapellido === ''){
						alert("Missing sobrenome. Please, fill both sobrenomes fields, or use the NPs form above.");
					} else {
						alert("Missing both sobrenomes");
					}
				}
				// CLASS Refactoring END
			}
		});
		