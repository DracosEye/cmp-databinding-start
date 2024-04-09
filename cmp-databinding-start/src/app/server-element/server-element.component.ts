import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated // Can switch to None or ShadowDom
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    
  }

  ngOnInit() {
    console.log('Text content: ' + this.header.nativeElement.textContent)
    console.log('Text Content of paragraph: '  + this.paragraph.nativeElement.textContent);
    
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngDoCheck(): void {
    
  }

  ngAfterContentInit(): void {
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    
  }

  ngAfterViewChecked(): void {
    
  }

  ngAfterViewInit(): void {
    console.log('Text content: ' + this.header.nativeElement.textContent)
  }

  ngOnDestroy(): void {
    
  }
}