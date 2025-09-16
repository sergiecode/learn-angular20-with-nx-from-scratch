import { Component, Input } from '@angular/core';
import { Course } from '@learn-angular20-with-nx-from-scratch/utils-common';

@Component({
  selector: 'lib-shared-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Input() showActions = true;
}
