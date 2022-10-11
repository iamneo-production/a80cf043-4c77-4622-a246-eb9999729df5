const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-decbafdfcbbeeafbacbbedcdbffcabdf.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-decbafdfcbbeeafbacbbedcdbffcabdf.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1');
    const result1 = await page.evaluate(()=>{
      let heading1 = document.querySelector("#heading1");
      return heading1.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let heading2 = document.querySelector("#heading2");
      return heading2.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-decbafdfcbbeeafbacbbedcdbffcabdf.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('img');
    const result1 = await page.evaluate(()=>{
      let runScored = document.querySelector("#runScored");
      return runScored.innerHTML;
    })
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-decbafdfcbbeeafbacbbedcdbffcabdf.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('table');
    const result1 = await page.evaluate(()=>{
      let ballFaced = document.querySelector("#ballFaced");
      return ballFaced.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let noOfFours = document.querySelector("#noOfFours");
      return noOfFours.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-decbafdfcbbeeafbacbbedcdbffcabdf.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('th');
    const result1 = await page.evaluate(()=>{
      let noOfSixes = document.querySelector("#noOfSixes");
      return noOfSixes.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let strikeRate = document.querySelector("#strikeRate");
      return strikeRate.innerHTML;
    })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();



(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-decbafdfcbbeeafbacbbedcdbffcabdf.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('tr');
    const result1 = await page.evaluate(()=>{
      let batsmanList = document.querySelector("#batsmanList");
      return batsmanList.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let batsmanName = document.querySelector("#batsmanName");
      return batsmanName.innerHTML;
    })
    console.log('TESTCASE:testcase6:success');
  }
  catch(e){
    console.log('TESTCASE:testcase6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();