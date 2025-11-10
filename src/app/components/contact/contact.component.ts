import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      this.submitError = 'Please fill in all fields';
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
}
