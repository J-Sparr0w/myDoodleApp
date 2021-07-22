import { ElementRef, Renderer2 } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('drawArea') canvas!: ElementRef<HTMLCanvasElement>;

  cx: any;
  touchPoints = navigator.maxTouchPoints;
  isDrawing = false;
  color = '#000';
  line_width = 8;
  canvasImg = [""];


  constructor(private renderer:Renderer2) { }

  ngAfterViewInit() {
    this.cx = this.canvas.nativeElement.getContext('2d',{alpha:false});
    this.setSize();
    this.cx.imageSmoothingEnabled = false;
    console.log(this.cx);
    /*
    Setting Up rxjs intervals to convert and update the image data to the database an
    */
    interval(100).pipe()
      .subscribe(() => {
        const canvasURI = this.canvas.nativeElement.toDataURL("image/png");

        if (this.canvasImg[this.canvasImg.length - 1] == canvasURI)
        return;

        this.canvasImg.push(canvasURI);
        // this.canImg.nativeElement.src = canvasImg;
      })



    //Enable touch features only if touchpoints greater than 0
    //touch events will trigger mouse events
    if (this.touchPoints) {

      this.renderer.listen(this.canvas.nativeElement, 'touchcancel', () => {
        this.isDrawing = false;
      })

      this.renderer.listen(this.canvas.nativeElement, 'touchstart', (e) => {
        e.preventDefault();
        let touch = e.touches[0];
        let x = touch.clientX;
        let y = touch.clientY;

        let mouseE = new MouseEvent('mousedown', {
          clientX: x,
          clientY:y
        });
        this.startDrawing(mouseE);

      })

      this.renderer.listen(this.canvas.nativeElement, 'touchmove', (e) => {
        e.preventDefault();
        let touch = e.touches[0];
        let x = touch.clientX;
        let y = touch.clientY;

        let mouseE = new MouseEvent('mousedown', {
          clientX: x,
          clientY:y
        });
        this.draw(mouseE);

      })

      this.renderer.listen(this.canvas.nativeElement, 'touchend', (e) => {
        e.preventDefault();
        this.finishDrawing();
      })
    }

    //mouse events mouseup and mousedown declared in the html

    this.renderer.listen(this.canvas.nativeElement, 'mousemove', (e) => {
      this.draw(e);
    })

     }



  setSize() {
    this.cx.canvas.height = window.innerHeight / 1.5;
    this.cx.canvas.width = window.innerWidth / 1.5;

    this.cx.fillStyle = "#FFF";
    this.cx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  offset(X:number,Y:number) {
    let x, y;

    x = X-this.canvas.nativeElement.offsetLeft;
    y = Y-this.canvas.nativeElement.offsetTop;

    /*
    if normalising is required
    let bounds = this.canvas.nativeElement.getBoundingClientRect();
    x /= bounds.width;
    y /= bounds.height;

    x *= this.cx.canvas.width;
    y *= this.cx.canvas.height;
    */

    x = Math.floor(x);
    y = Math.floor(y);


    return { x, y };
  }



  startDrawing(e:MouseEvent) {
    e.preventDefault();
    let { x, y } = this.offset(e.clientX, e.clientY);
    this.isDrawing=true
    this.cx.beginPath();
    this.cx.moveTo(x, y);
    this.cx.lineWidth = this.line_width;
    this.cx.lineCap = "round";
    this.cx.lineJoin = "round";
    this.cx.strokeStyle = this.color;

  }

  draw(e:MouseEvent) {
    if (!this.isDrawing) { return;}

    let { x, y } = this.offset(e.clientX, e.clientY);

    this.cx.lineTo(x, y);
    this.cx.stroke();

  }


  finishDrawing() {
    if (this.isDrawing) {
      this.cx.stroke();
      this.cx.closePath();
      this.isDrawing = false;
    }
  }

  //tools

  selectColor(col: string,size?:number) {
    console.log(col);
    this.color = col;

    if (size)
      this.line_width = size;
    else
      return;
  }

  clearCanvas() {
    this.cx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  ngOnDestroy() {

  }
}
