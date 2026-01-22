'use client';

import { downloadResume } from '@/lib/utils';
import Button from '../ui/Button';
import { DynamicIcon } from 'lucide-react/dynamic';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-mono text-primary text-sm mb-4">
              06. What's next?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get in touch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
              I am actively seeking new job opportunities and always excited to discuss interesting projects.
               Whether you have a role in mind, a project idea, or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-col md:flex-row mb-8">
              <Button
                variant="hero"
                size="xl"
                className="mb-4 md:mb-0 md:mr-4"
                asChild
              >
                <a href="mailto:leander.vanderbiesen@proton.me">
                  <DynamicIcon name="send" />
                  <span>Say hello</span>
                </a>
              </Button>
              <Button variant="glass" size="xl" onClick={downloadResume}>
                Download resume
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
              <p className="flex items-center mr-4">
                <DynamicIcon
                  name="mail"
                  size={16}
                  className="mr-2 text-primary"
                />
                <a
                  href="mailto:leander.vanderbiesen@proton.me"
                  className="text-sm underline"
                >
                  leander.vanderbiesen@proton.me
                </a>
              </p>
              <p className="flex items-center">
                <DynamicIcon
                  name="map-pin"
                  size={16}
                  className="mr-2 text-primary"
                />
                <span className="text-sm">Zürich, Switzerland</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
