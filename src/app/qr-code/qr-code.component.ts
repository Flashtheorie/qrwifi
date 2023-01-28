import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  wifiName: string = '';
  wifiPassword: string = '';
  qrCode: string = '';
  showPrintView = false;
  generateQRCode() {
    this.qrCode = `WIFI:T:WPA;S:${this.wifiName};P:${this.wifiPassword};;`;
  }
  printQRCode() {
    this.showPrintView = true;
    setTimeout(() => {
    window.print();
    }, 1000);
    
  }
  constructor() { }

  ngOnInit(): void {
  }
}
