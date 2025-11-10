import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { KurzurlService, PostDate, ApiResponse } from '../../service/kurzurl.service';
import { PricingComponent } from "@landing/components/pricing/pricing.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, PricingComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: [KurzurlService],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class LandingComponent {
  data: PostDate = {
    url: '',
  };

  isLoading = false;
  lastResponse: ApiResponse | null = null;
  errorMessage = '';
  copiedText = 'Copy';
  activeTab: 'shortUrl' | 'qr' = 'shortUrl';
  qrCreationBaseUrl: string = 'http://localhost:61595/auth/login';

  constructor(private kurzurlService: KurzurlService) {}

  generateShortUrl() {
    if (!this.data.url) return;

    window.location.href = this.qrCreationBaseUrl;

    return;

    this.isLoading = true;
    this.errorMessage = '';
    this.lastResponse = null;

    this.kurzurlService.generateKurzUrl(this.data).subscribe({
      next: (response) => {
        if (response.success) {
          this.kurzurlService.getShortUrl(response.data).subscribe({
            next: (shortUrlResponse) => {
              this.lastResponse = shortUrlResponse;
              this.isLoading = false;
            },
            error: (error) => {
              this.errorMessage = `Failed to retrieve shortened URL: ${
                error.error?.message || error.message || 'Unknown error'
              }`;
              this.isLoading = false;
              console.error('Get short URL error:', error);
            },
          });
        }
      },
      error: (error) => {
        this.errorMessage = `Failed to create shortened URL: ${
          error.error?.message || error.message || 'Unknown error'
        }`;
        this.isLoading = false;
        console.error('Generate URL error:', error);
      },
    });
  }

  changeActiveTab(tab: 'shortUrl' | 'qr') {
    this.activeTab = tab;
    this.data.url = '';
    this.errorMessage = '';
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedText = 'Copied!';
      setTimeout(() => {
        this.copiedText = 'Copy';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
}
