import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DoodleService } from 'src/app/services/doodle.service';

@Component({
  selector: 'app-feedback-canvas',
  templateUrl: './feedback-canvas.component.html',
  styleUrls: ['./feedback-canvas.component.scss']
})
export class FeedbackCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('spectatorView') canvas!: ElementRef<HTMLCanvasElement>;
   private cx: any;
  private doodleSub!: Subscription;

  constructor(
    private doodleService: DoodleService,
    private renderer :Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.cx = this.canvas.nativeElement.getContext('2d', { alpha: false });
    this.setSize();


  // this.doodleSub=  this.doodleService.loadDoodle().subscribe(
  //     doodles => {
  //   const src=  doodles[doodles.length - 1].src;
  //     this.updateDrawing(src)
  //     })

  }

  setSize() {
    this.cx.canvas.height = window.innerHeight / 1.5;
    this.cx.canvas.width = window.innerWidth / 1.5;

    this.cx.fillStyle = "#FFF";
    this.cx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }


  updateDrawing(dataURI:string) {
    const img = new Image();
    img.src = dataURI;
    this.renderer.listen(img, 'load', () => {
      this.cx.drawImage(img, 0, 0);
    })

  }


  ngOnDestroy() {
    this.doodleSub.unsubscribe();
}



}
