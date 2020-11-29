import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  ToastrService
} from 'ngx-toastr';
import {
  ContactService
} from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup
  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private route: Router) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(2000)]]
    })
  }

  public sendMessage(): void {
    const {
      email,
      message
    } = this.contactForm.value
    if (!this.contactForm.invalid) {
      this.contactService.sendMessage(email, message).then(() => {
        this.toastr.success('Votre message a bien été envoyé, vous allez être redirigé vers l\'accueil.');
        this.contactForm.reset()
        this.route.navigateByUrl('/home')
      })
      .catch(() => {
        this.toastr.error('Nous avons rencontré un problème lors de l\'envoi du message.')
      })
    } else {
      this.toastr.error('Veuillez correctement remplir les champs du formulaire.')
    }

  }

}
