const obs = new Observable(subscriber => subscriber.next("Hello"));
obs.subscriber((data)=> console.log(data))

//events
fromEvent (document, 'click').subscriber(clickEvent => {
    console.log(clickEvent);
})

//array
function ngOnInit(){
    const source = from([1,2,3])
    source.subscribe(data => console.log(data))
}