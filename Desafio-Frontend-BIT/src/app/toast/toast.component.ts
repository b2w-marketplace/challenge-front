import { Component, OnInit } from '@angular/core';
import  {  NgbToast, NgbToastService, NgbToastType }  from  'ngb-toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  show = false;
  autohide = true;

  constructor(private  toastService:  NgbToastService) { }

  showSuccess(): void {
		const toast: NgbToast = {
			toastType:  NgbToastType.Success,
			text:  "This is an sample success toast with dismissible action",
			dismissible:  true,
			onDismiss: () => {
				console.log("Toast dismissed!!");
			}
		}
		this.toastService.show(toast);
	}

	removeToast(toast: NgbToast): void {
		this.toastService.remove(toast);
	}
  ngOnInit(): void {
  }

}
