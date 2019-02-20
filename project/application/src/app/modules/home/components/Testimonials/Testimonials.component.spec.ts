import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { TestimonialsComponent } from './Testimonials.component';


describe('HomeComponent', () => {
    let fixture: ComponentFixture<TestimonialsComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestimonialsComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            data: {
                                seoProps: {
                                    title: 'Angular Universal: server-side rendering',
                                },
                                seoPropsToRemove: {
                                    title: true,
                                },
                            },
                        },
                    },
                },
                TransferState,
                TransferHttpService,
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(TestimonialsComponent);
    }));
    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'Home page!'`, async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual(undefined);
    }));
    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Home page!');
    }));
});
