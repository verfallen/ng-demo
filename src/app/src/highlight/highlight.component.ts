import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostListener
} from "@angular/core";

@Component({
  selector: "app-highlight",
  templateUrl: "./highlight.component.html",
  styleUrls: ["./highlight.component.styl"]
})
export class HighlightComponent implements OnInit {
  @Input()
  highlightColor: string;
  private containerEl: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(
      this.el.nativeElement,
      this.el.nativeElement.childNodes,
      this.el.nativeElement.childNodes[0],
      this.el.nativeElement.innerHTML
    );
    this.containerEl = this.el.nativeElement.childNodes[0];
  }
  @HostListener("mouseenter") onMouserEnter() {
    this.highlight(this.highlightColor);
  }
  @HostListener("mouseleave") onmouseleave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.containerEl.style.backgroundColor = color;
  }
}
