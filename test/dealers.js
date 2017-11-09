const chai = require('chai');
const dealers = require('../src/dealers.js');

// chai setup
const should = chai.should();
const expect = chai.expect;

const dealersListClosestCustom = {"dealers":[{"latitude":"37.996934","longitude":"-87.4870782","id":"3686","gid":"0","esc_id":"255","abbrev":"CUSREC-EVV","name":"Custom Recreation","address":"2190 N Cullen Ave","additional":"","city":"Evansville","state":"IN","zip":"47715","country":"US","fax":"","phone":"(812) 477-3052","email":"info@customrecreation.com","web":"http:\/\/www.customrecreation.com","active":"1","intl":"0","extra":"","bigchain":"0","country_name":"United States","distance":"3.38 miles","distNum":3.3790429398583,"num":2,"acc_latitude":"37.996934","acc_longitude":"-87.4870782","path":{"city":"evansville","state":"in","name":"custom-recreation"},"brand":{"goalrilla":{"id":"3686","phone":"","email":"","systems":"goals-all-w-trainers.png","carry_gamemaker":"0","dealer_level":"platinum","accept_leads":"1","leads_email":"info@customrecreation.com","notify_now":"1","notify_daily":"0","error":0}}},{"latitude":"37.9740006","longitude":"-87.469924","id":"850","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"6601 E. Lloyd Expressway","additional":"","city":"Evansville","state":"IN","zip":"47715","country":"US","fax":"","phone":"(812) 402-9100","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":"","bigchain":"1","country_name":"United States","distance":"5.15 miles","distNum":5.1487161869205,"num":6,"acc_latitude":"37.9740006","acc_longitude":"-87.469924","path":{"city":"evansville","state":"in","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"38.389398","longitude":"-86.929561","id":"3752","gid":"0","esc_id":"502","abbrev":"CUSREC-JASP","name":"Adentures Recreation and Gear","address":"204 Third Street","additional":"","city":"Jasper","state":"IN","zip":"47546","country":"US","fax":"","phone":"(812) 482-3757","email":"phil@adventuresrecreation.com","web":"http:\/\/www.adventuresrecreation.com","active":"1","intl":"0","extra":"","bigchain":"0","country_name":"United States","distance":"41.25 miles","distNum":41.254706437204,"num":1,"acc_latitude":"38.389398","acc_longitude":"-86.929561","path":{"city":"jasper","state":"in","name":"adentures-recreation-and-gear"},"brand":{"goalrilla":{"id":"3752","phone":"(812) 482-3757","email":"phil@adventuresrecreation.com","systems":"goals-all.png","carry_gamemaker":"0","dealer_level":"platinum","accept_leads":"1","leads_email":"phil@adventuresrecreation.com","notify_now":"1","notify_daily":"0","error":0}}},{"latitude":"37.0769613","longitude":"-88.6929864","id":"5745","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"5101 Hinkleville Road","additional":"Unit 600","city":"Paducah","state":"KY","zip":"42001","country":"US","fax":"","phone":"(270) 442-0100","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"91.35 miles","distNum":91.347405626859,"num":5,"acc_latitude":"37.0769613","acc_longitude":"-88.6929864","path":{"city":"paducah","state":"ky","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"37.7336742","longitude":"-89.1925084","id":"3635","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"1250 East Main St.","additional":"","city":"Carbondale","state":"IL","zip":"62902","country":"US","fax":"","phone":"(618) 549-7581","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":"NULL","bigchain":"1","country_name":"United States","distance":"92.66 miles","distNum":92.662316810807,"num":0,"acc_latitude":"37.7336742","acc_longitude":"-89.1925084","path":{"city":"carbondale","state":"il","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"39.4062455","longitude":"-87.4089785","id":"3925","gid":"0","esc_id":"0","abbrev":null,"name":"Complete Outdoor Equip","address":"5009 U.S. 41 South","additional":"","city":"Terre Haute","state":"IN","zip":"47802","country":"US","fax":"","phone":"(812) 299-1777","email":"completeoutdoor@yahoo.com","web":"http:\/\/www.completeoutdoorequipment.com","active":"1","intl":"0","extra":"","bigchain":"0","country_name":"United States","distance":"95.45 miles","distNum":95.445944283681,"num":4,"acc_latitude":"39.4062455","acc_longitude":"-87.4089785","path":{"city":"terre-haute","state":"in","name":"complete-outdoor-equip"},"brand":{"goalrilla":{"id":"3925","phone":"","email":"","systems":"goals-all.png","carry_gamemaker":"0","dealer_level":"platinum","accept_leads":"1","leads_email":"completeoutdoor@yahoo.com","notify_now":"1","notify_daily":"0","error":0}}},{"latitude":"39.1609235","longitude":"-86.495847","id":"701","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"2850 East 3rd Street","additional":"","city":"Bloomington","state":"IN","zip":"47401","country":"US","fax":"","phone":"(812) 335-1377","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"96.29 miles","distNum":96.285004367259,"num":3,"acc_latitude":"39.1609235","acc_longitude":"-86.495847","path":{"city":"bloomington","state":"in","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"38.3174309","longitude":"-85.7618279","id":"629","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"951 East Lewis and Clark Parkway","additional":"","city":"Clarksville","state":"IN","zip":"47129","country":"US","fax":"","phone":"(812) 288-2194","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"98.35 miles","distNum":98.345210287191,"num":7,"acc_latitude":"38.3174309","acc_longitude":"-85.7618279","path":{"city":"clarksville","state":"in","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}}],"stateName":"Indiana","zip":{"ID":"42268","CountiesArea":"235","ZipCodePopulation":"31457","HouseholdsPerZipcode":"12895.0000","WhitePop":"29232","BlackPop":"1793","HispanicPop":"653","AsianPop":"389","IndianPop":"172","HawaiianPop":"49","OtherPop":"379","MalePop":"15584","FemalePop":"15873","PersonsPerHousehold":"2.37","AverageHouseValue":"116700.00","IncomePerHousehold":"50126.00","MedianAge":"39.60","MedianAgeMale":"38.10","MedianAgeFemale":"41.20","AverageFamilySize":"2.90","Bus03Establishments":"835","Bus03Employment":"15250","Bus03PayrollQuarter1":"144428","Bus03PayrollAnnual":"570322","Bus03EmploymentFlag":" ","CBSAPop2003":"358676","CBSADivPop2003":"0","DeliveryActive":"15444","DeliveryBusiness":"918","DeliveryResidential":"13442","DeliverySpecial":"13442","DeliveryBox":"0","DeliverySFDU":"12624","DeliveryMFDU":"87","PopulationEstimate":"31857","_109thDistrict":"0","_109thArea":"0","_110thDistrict":"08","_110thArea":"7255.39","GrowthRank":"0","GrowthHousingUnits2003":"0","GrowthHousingUnits2004":"0","GrowthIncreaseNumber":"0","GrowthIncreasePercentage":"0.00","Latitude":"38.028262","Longitude":"-87.534747","Elevation":"383.00","AreaLand":"16.223000","AreaWater":"0.197000","Primary":"P","State":"IN","CityType":"P","CityAliasType":null,"Classification":" ","ZipCode":"47711","CityAliasAbbr":null,"AreaCode":"812","AreaCodeTemp":"812","AreaCodeTest":null,"City":"EVANSVILLE","CityAliasName":"EVANSVILLE","CountyName":"VANDERBURGH","CountyFIPS":"163","StateFIPS":"18","CountyANSI":"163","StateANSI":"18","TimeZone":"6","DayLightSaving":"Y","MSA":"2440","PMSA":null,"PMSAName":null,"CSA":null,"CSAName":null,"CBSA":"21780","CBSA_DIV":null,"CBSA_DIV_Name":null,"CBSA_Type":"Metro","CBSA_Name":"Evansville, IN-KY","MSAName":"Evansville-Henderson, IN-KY MSA","Region":"Midwest","Division":"East North Central","MailingName":"Y","MultiCounty":" ","Prev":"47710","Next":"47712","CityStateKey":"X12162","PreferredLastLineKey":"X12162","PreferredLastLineName":"EVANSVILLE","IntroDateZIP":"<2004-10","IntroDateAlias":"<2004-10","FacilityCode":"P","CityDeliveryIndicator":"Y","CarrierRouteRateSortation":"D","FinanceNumber":"172651","UniqueZIPName":null,"MixedCaseCity":"Evansville","MixedCaseAlias":"Evansville","SSA_State_County_Code":"15810","Medicare_CBSA_Code":"21780","Medicare_CBSA_Name":"Evansville, IN-KY","Medicare_CBSA_Type":"Metro","Medicare_Rating_Area_ID":"17","CityAliases":{"Item":[{"ID":"42268","Primary":"P","CityType":"P","CityAliasType":null,"CityAliasName":"EVANSVILLE","MailingName":"Y","CityStateKey":"X12162","FacilityCode":"P","MixedCaseAlias":"Evansville"},{"ID":"42269","Primary":" ","CityType":"N","CityAliasType":"B","CityAliasName":"EVANSVILLE DRESS REGIONAL AI","MailingName":"N","CityStateKey":"X12163","FacilityCode":"N","MixedCaseAlias":"Evansville Dress Regional Ai"},{"ID":"42270","Primary":" ","CityType":"N","CityAliasName":"KNIGHT","MailingName":"N","CityStateKey":"X12662","FacilityCode":"N","MixedCaseAlias":"Knight","CityAliasType":null},{"ID":"42271","Primary":" ","CityType":"N","CityAliasName":"MCCUTCHANVILLE","MailingName":"N","CityStateKey":"X12888","FacilityCode":"N","MixedCaseAlias":"McCutchanville","CityAliasType":null},{"ID":"42266","Primary":" ","CityType":"N","CityAliasName":"DARMSTADT","MailingName":"N","CityStateKey":"X12015","FacilityCode":"N","MixedCaseAlias":"Darmstadt","CityAliasType":null},{"ID":"42267","Primary":" ","CityType":"N","CityAliasName":"DAYLIGHT","MailingName":"N","CityStateKey":"X12016","FacilityCode":"N","MixedCaseAlias":"Daylight","CityAliasType":null}]},"latitude":"38.028262","longitude":"-87.534747"},"hq":{"id":"3834","gid":"0","hq":"0","name":"Recreation Unlimited","address":"15150 Herriman Boulevard, Suite B","additional":"","city":"Noblesville","state":"IN","zip":"46060","country":"US","phone":"(317) 773-3545","fax":"(317) 773-2675","email":"goalrilla@recunlimited.com","web":"http:\/\/www.recreationunltd.com","active":"1","intl":"0","extra":"","systems":"goals-all-w-trainers.png","bigchain":"0","dup_check":"0","esc_id":"673","abbrev":"RECUNL-NOBLE","created":"1321379879","changed":"1410791190","uid":"5","brand":{"goalrilla":{"id":"3834","phone":"(317) 773-3545","email":"goalrilla@recunlimited.com","systems":"goals-all-w-trainers.png","carry_gamemaker":"0","dealer_level":"platinum","accept_leads":"1","leads_email":"goalrilla@recunlimited.com","notify_now":"1","notify_daily":"0","error":0}},"hq_id":"4","hq_name":"Woodplay Headquarters","error":0},"path":"in\/evansville","total":8,"error":0};
const dealersListClosestDicks = {"dealers":[{"latitude":"42.689889","longitude":"-73.853465","id":"519","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"1 Crossgates Mall Rd.","additional":"","city":"Albany","state":"NY","zip":"12203","country":"US","fax":"","phone":"(518) 464-1948","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":"","bigchain":"1","country_name":"United States","distance":"9.67 miles","distNum":9.6710130661515,"num":0,"acc_latitude":"42.689889","acc_longitude":"-73.853465","path":{"city":"albany","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"42.7530264","longitude":"-73.7617206","id":"515","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"579 Troy Schenectady Rd","additional":"","city":"Colonie","state":"NY","zip":"12110","country":"US","fax":"","phone":"(518) 783-0701","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"10.00 miles","distNum":10.001743581505,"num":17,"acc_latitude":"42.7530264","acc_longitude":"-73.7617206","path":{"city":"colonie","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"43.1024146","longitude":"-73.7362186","id":"520","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"3065 Route 50","additional":"","city":"Saratoga Springs","state":"NY","zip":"12866","country":"US","fax":"","phone":"(518) 583-7218","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"22.41 miles","distNum":22.409245384018,"num":11,"acc_latitude":"43.1024146","acc_longitude":"-73.7362186","path":{"city":"saratoga-springs","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"43.326835","longitude":"-73.676618","id":"651","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"Glen Falls Space D-103, 578 Avaiton Rd","additional":"","city":"Queensbury","state":"NY","zip":"12804","country":"US","fax":"","phone":"(518) 743-8790","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"37.82 miles","distNum":37.816270767892,"num":20,"acc_latitude":"43.326835","acc_longitude":"-73.676618","path":{"city":"queensbury","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"43.326835","longitude":"-73.676618","id":"4293","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"578 Aviation Road","additional":"","city":"Queensbury","state":"NY","zip":"12804","country":"US","fax":"","phone":"(518) 743-8790","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":"","bigchain":"1","country_name":"United States","distance":"37.82 miles","distNum":37.816270767892,"num":16,"acc_latitude":"43.326835","acc_longitude":"-73.676618","path":{"city":"queensbury","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"42.4649752","longitude":"-73.206811","id":"700","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"635 Merrill Road","additional":"","city":"Pittsfield","state":"MA","zip":"01201","country":"US","fax":"","phone":"(413) 395-0870","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"44.42 miles","distNum":44.417045153173,"num":18,"acc_latitude":"42.4649752","acc_longitude":"-73.206811","path":{"city":"pittsfield","state":"ma","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.966863","longitude":"-73.9843378","id":"593","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"Kingston Hudson Ste 127, 1300 Ulster Ave","additional":"","city":"Kingston","state":"NY","zip":"12401","country":"US","fax":"","phone":"(845) 382-2151","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"58.61 miles","distNum":58.606334296882,"num":21,"acc_latitude":"41.966863","acc_longitude":"-73.9843378","path":{"city":"kingston","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.966863","longitude":"-73.9843378","id":"4296","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"1300 Ulster Ave, 'Hudson Valley Mall","additional":"","city":"Kingston","state":"NY","zip":"12401","country":"US","fax":"","phone":"(845) 382-2151","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":"","bigchain":"1","country_name":"United States","distance":"58.61 miles","distNum":58.606334296882,"num":6,"acc_latitude":"41.966863","acc_longitude":"-73.9843378","path":{"city":"kingston","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"42.4477041","longitude":"-75.0451434","id":"5788","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"5006 State Highway 23, Suite 1C","additional":"Southside Mall","city":"Oneonta","state":"NY","zip":"13820","country":"US","fax":"","phone":"(607) 432-0203","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"61.61 miles","distNum":61.613130836821,"num":15,"acc_latitude":"42.4477041","acc_longitude":"-75.0451434","path":{"city":"oneonta","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.9632028","longitude":"-73.5007152","id":"3587","gid":"0","esc_id":"0","abbrev":null,"name":"Camp Athletic Supply","address":"2046 Country Rd # 7","additional":"","city":"Ancram","state":"NY","zip":"12502","country":"US","fax":"","phone":"(800) 207-4446","email":"campsupply@taconic.net","web":"http:\/\/www.campathletic.com","active":"1","intl":"0","extra":"NULL","bigchain":"0","country_name":"United States","distance":"62.95 miles","distNum":62.948210588804,"num":8,"acc_latitude":"41.9632028","acc_longitude":"-73.5007152","path":{"city":"ancram","state":"ny","name":"camp-athletic-supply"},"brand":{"goalrilla":{"error":0}}},{"latitude":"43.0773464","longitude":"-75.3090406","id":"3829","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"Routes 5 and 5A","additional":"","city":"New Hartford","state":"NY","zip":"13413","country":"US","fax":"","phone":"(315) 798-9626","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":"NULL","bigchain":"1","country_name":"United States","distance":"71.56 miles","distNum":71.563753612279,"num":22,"acc_latitude":"43.0773464","acc_longitude":"-75.3090406","path":{"city":"new-hartford","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"43.5851075","longitude":"-72.9707709","id":"4289","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"320 US Route 7 South","additional":"","city":"Rutland","state":"VT","zip":"05701","country":"US","fax":"","phone":"(802) 773-2710","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":"","bigchain":"1","country_name":"United States","distance":"72.24 miles","distNum":72.241534820853,"num":12,"acc_latitude":"43.5851075","acc_longitude":"-72.9707709","path":{"city":"rutland","state":"vt","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"43.6041767","longitude":"-72.9714667","id":"714","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"Rt 7 South, 315 S Main","additional":"","city":"Rutland","state":"VT","zip":"05701","country":"US","fax":"","phone":"(802) 773-2710","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"73.19 miles","distNum":73.189434626869,"num":23,"acc_latitude":"43.6041767","acc_longitude":"-72.9714667","path":{"city":"rutland","state":"vt","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"42.356402","longitude":"-72.5477785","id":"654","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"367 Russell Street","additional":"","city":"Hadley","state":"MA","zip":"01035","country":"US","fax":"","phone":"(413) 584-6934","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"77.58 miles","distNum":77.583780008001,"num":13,"acc_latitude":"42.356402","acc_longitude":"-72.5477785","path":{"city":"hadley","state":"ma","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"42.1330832","longitude":"-72.6222828","id":"532","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"1081 Riverdale Street","additional":"","city":"W Springfield","state":"MA","zip":"01089","country":"US","fax":"","phone":"(413) 781-6155","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"82.02 miles","distNum":82.020890659041,"num":3,"acc_latitude":"42.1330832","acc_longitude":"-72.6222828","path":{"city":"w-springfield","state":"ma","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.6258338","longitude":"-73.9209183","id":"508","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"2001 South Road","additional":"","city":"Poughkeepsie","state":"NY","zip":"12601","country":"US","fax":"","phone":"(845) 297-4767","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"82.13 miles","distNum":82.130934205176,"num":7,"acc_latitude":"41.6258338","acc_longitude":"-73.9209183","path":{"city":"poughkeepsie","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"42.9283002","longitude":"-72.3026932","id":"661","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"42 Ash Brook Road","additional":"","city":"Keene","state":"NH","zip":"03431","country":"US","fax":"","phone":"(603) 357-0861","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"83.29 miles","distNum":83.290563671238,"num":14,"acc_latitude":"42.9283002","acc_longitude":"-72.3026932","path":{"city":"keene","state":"nh","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.8224465","longitude":"-72.8829132","id":"697","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"110 Albany Turnpike, Ste 1109","additional":"","city":"Canton","state":"CT","zip":"06019","country":"US","fax":"","phone":"(860) 693-1619","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"87.27 miles","distNum":87.266803236893,"num":4,"acc_latitude":"41.8224465","acc_longitude":"-72.8829132","path":{"city":"canton","state":"ct","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.9977413","longitude":"-72.5778994","id":"652","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"130 Elm Street","additional":"","city":"Enfield","state":"CT","zip":"06082","country":"US","fax":"","phone":"(860) 253-9475","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"89.52 miles","distNum":89.524124706681,"num":5,"acc_latitude":"41.9977413","acc_longitude":"-72.5778994","path":{"city":"enfield","state":"ct","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.7358305","longitude":"-72.8401264","id":"3687","gid":"38","esc_id":"81","abbrev":"WA07","name":"Walpole Woodworkers","address":"1079 Farmington Ave","additional":"","city":"Farmington","state":"CT","zip":"06032","country":"US","fax":"","phone":"(860) 677-9690","email":"woodplay@walpolewood.net","web":"http:\/\/www.walpolewoodworkers.com","active":"1","intl":"0","extra":"","bigchain":"0","country_name":"United States","distance":"93.36 miles","distNum":93.364017720061,"num":2,"acc_latitude":"41.7358305","acc_longitude":"-72.8401264","path":{"city":"farmington","state":"ct","name":"walpole-woodworkers"},"brand":{"goalrilla":{"id":"3687","phone":"(860) 677-9690","email":"woodplay@walpolewood.net","systems":"goals-all.png","carry_gamemaker":"0","dealer_level":"platinum","accept_leads":"1","leads_email":"woodplay@walpolewood.net","notify_now":"1","notify_daily":"0","error":0}}},{"latitude":"41.4551361","longitude":"-74.3715472","id":"507","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"1 N Galleria Dr Ste 132","additional":"","city":"Middletown","state":"NY","zip":"10941","country":"US","fax":"","phone":"(845) 692-5035","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"96.48 miles","distNum":96.482026158981,"num":1,"acc_latitude":"41.4551361","acc_longitude":"-74.3715472","path":{"city":"middletown","state":"ny","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.6733188","longitude":"-72.8398803","id":"514","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"280 New Britain Ave","additional":"","city":"Plainville","state":"CT","zip":"06062","country":"US","fax":"","phone":"(860) 747-2102","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"96.87 miles","distNum":96.869746379286,"num":9,"acc_latitude":"41.6733188","acc_longitude":"-72.8398803","path":{"city":"plainville","state":"ct","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.6684856","longitude":"-72.7215093","id":"530","gid":"1","esc_id":"0","abbrev":null,"name":"Dick's Sporting Goods","address":"2985 Berlin Turnpike","additional":"","city":"Newington","state":"CT","zip":"06111","country":"US","fax":"","phone":"(860) 666-3877","email":"","web":"http:\/\/www.dickssportinggoods.com","active":"1","intl":"0","extra":null,"bigchain":"1","country_name":"United States","distance":"100.77 miles","distNum":100.77133171858,"num":10,"acc_latitude":"41.6684856","acc_longitude":"-72.7215093","path":{"city":"newington","state":"ct","name":"dicks-sporting-goods"},"brand":{"goalrilla":{"error":0}}},{"latitude":"41.6550846","longitude":"-72.7299233","id":"5578","gid":"0","esc_id":"0","abbrev":null,"name":"Timber Gyms","address":"94 Pane Road","additional":"","city":"Newington","state":"CT","zip":"06111","country":"US","fax":"","phone":"(860) 594-8888","email":"clint@timbergyms.com","web":"http:\/\/www.timbergyms.com","active":"1","intl":"0","extra":"","bigchain":"0","country_name":"United States","distance":"101.24 miles","distNum":101.24068474246,"num":19,"acc_latitude":"41.6550846","acc_longitude":"-72.7299233","path":{"city":"newington","state":"ct","name":"timber-gyms"},"brand":{"goalrilla":{"error":0}}}],"stateName":"New York","zip":{"ID":"11921","CountiesArea":"206","ZipCodePopulation":"0","HouseholdsPerZipcode":"0.0000","WhitePop":"0","BlackPop":"0","HispanicPop":"0","AsianPop":"0","IndianPop":"0","HawaiianPop":"0","OtherPop":"0","MalePop":"0","FemalePop":"0","PersonsPerHousehold":"0.00","AverageHouseValue":"0.00","IncomePerHousehold":"0.00","MedianAge":"0.00","MedianAgeMale":"0.00","MedianAgeFemale":"0.00","AverageFamilySize":"0.00","Bus03Establishments":"14","Bus03Employment":"0","Bus03PayrollQuarter1":"0","Bus03PayrollAnnual":"0","Bus03EmploymentFlag":"H","CBSAPop2003":"870716","CBSADivPop2003":"0","DeliveryActive":"0","DeliveryBusiness":"0","DeliveryResidential":"0","DeliverySpecial":"0","DeliveryBox":"0","DeliverySFDU":"0","DeliveryMFDU":"0","PopulationEstimate":"0","_109thDistrict":"0","_109thArea":"0","_110thDistrict":"20","_110thArea":"1231.28","GrowthRank":"0","GrowthHousingUnits2003":"0","GrowthHousingUnits2004":"0","GrowthIncreaseNumber":"0","GrowthIncreasePercentage":"0.00","Latitude":"42.814500","Longitude":"-73.940300","Elevation":"246.00","AreaLand":"0.000000","AreaWater":"0.000000","Primary":"P","State":"NY","CityType":"P","CityAliasType":"B","Classification":"U","ZipCode":"12345","CityAliasAbbr":null,"AreaCode":"518","AreaCodeTemp":"518","AreaCodeTest":null,"City":"SCHENECTADY","CityAliasName":"SCHENECTADY","CountyName":"SCHENECTADY","CountyFIPS":"093","StateFIPS":"36","CountyANSI":"093","StateANSI":"36","TimeZone":"5","DayLightSaving":"Y","MSA":"0160","PMSA":null,"PMSAName":null,"CSA":"104","CSAName":"Albany-Schenectady, NY","CBSA":"10580","CBSA_DIV":null,"CBSA_DIV_Name":null,"CBSA_Type":"Metro","CBSA_Name":"Albany-Schenectady-Troy, NY","MSAName":"Albany-Schenectady-Troy, NY MSA","Region":"Northeast","Division":"Middle Atlantic","MailingName":"Y","MultiCounty":" ","Prev":"12325","Next":"12401","CityStateKey":"V15958","PreferredLastLineKey":"V15958","PreferredLastLineName":"SCHENECTADY","IntroDateZIP":"<2004-10","IntroDateAlias":"<2004-10","FacilityCode":"P","CityDeliveryIndicator":"N","CarrierRouteRateSortation":"C","FinanceNumber":"357535","UniqueZIPName":null,"MixedCaseCity":"Schenectady","MixedCaseAlias":"Schenectady","SSA_State_County_Code":"33650","Medicare_CBSA_Code":"10580","Medicare_CBSA_Name":"Albany-Schenectady-Troy, NY","Medicare_CBSA_Type":"Metro","Medicare_Rating_Area_ID":"1","CityAliases":{"Item":[{"ID":"11921","Primary":"P","CityType":"P","CityAliasName":"SCHENECTADY","MailingName":"Y","CityStateKey":"V15958","FacilityCode":"P","UniqueZIPName":null,"MixedCaseAlias":"Schenectady"},{"ID":"11919","Primary":" ","CityType":"N","CityAliasName":"GENERAL ELECTRIC","MailingName":"N","CityStateKey":"V13520","FacilityCode":"N","UniqueZIPName":"Y","MixedCaseAlias":"General Electric"},{"ID":"11920","Primary":" ","CityType":"N","CityAliasName":"SCHDY","MailingName":"N","CityStateKey":"V15957","FacilityCode":"N","MixedCaseAlias":"Schdy","UniqueZIPName":null}]},"latitude":"42.814500","longitude":"-73.940300"},"hq":{"id":"3","nid":"0","esc_id":"","abbrev":"|-NA-|","hq_name":"Woodplay Headquarters","name":"Woodplay Headquarters","address":"817 Maxwell Ave.","city":"Evansville","state":"IN","zip":"47711","phone":"1-866-873-3527","email":"woodplayinfo@escaladesports.com","lead_email":"pgdirectsales@escaladesports.com","extra":"","use_default":"0","hq_id":"3","error":0},"path":"ny\/schenectady","total":24,"error":0}

describe('Dealers', function() {
	it('_getNearestDealerFromGroup should throw an error if no dealers are provided', done => {
		expect(() => dealers._getNearestDealerFromGroup(undefined, '47711')).to.throw(Error);
		done();
	});
	it('_getNearestDealerFromGroup should throw an error if no zip is provided', done => {
		expect(() => dealers._getNearestDealerFromGroup(dealersListClosestCustom.dealers, undefined)).to.throw(Error);
		done();
	});
	it('_getNearestDealerFromGroup should return Custom Recreation', done => {
		const closest = dealers._getNearestDealerFromGroup(dealersListClosestCustom.dealers, 47711);
		expect(parseInt(closest.id)).to.equal(3686);
		done();
	});
		it('_getNearestDealerFromGroup should return Dick\'s Sporting Goods', done => {
		const closest = dealers._getNearestDealerFromGroup(dealersListClosestDicks.dealers, 47711);
		expect(parseInt(closest.id)).to.equal(519);
		done();
	});
});