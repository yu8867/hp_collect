import React, { useState } from 'react';
import { Button } from './Button';

interface SubscriptionFormProps {
  isVisible: boolean;
  formRef: React.RefObject<HTMLDivElement | null>;
}

type FormData = {
  roast: string;
  frequency: string;
  name: string;
  email: string;
  zip: string;
  address: string;
  phone: string;
  deliveryTime: string;
  note: string;
};

type Errors = {
  [key in keyof FormData]?: string;
};

export const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ isVisible, formRef }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    roast: '',
    frequency: '',
    name: '',
    email: '',
    zip: '',
    address: '',
    phone: '',
    deliveryTime: '',
    note: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top of form when step changes
  React.useEffect(() => {
    if (isVisible && step > 1 && step < 4) {
      const formElement = formRef.current;
      if (formElement) {
        const yOffset = -50; 
        const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [step, isVisible, formRef]);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Errors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.roast) {
        newErrors.roast = 'いずれかを選択してください';
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.frequency) {
        newErrors.frequency = 'いずれかを選択してください';
        isValid = false;
      }
    } else if (currentStep === 3) {
      if (!formData.name) newErrors.name = '必須項目です';
      if (!formData.email) {
        newErrors.email = '必須項目です';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = '正しいメールアドレス形式で入力してください';
      }
      if (!formData.zip) {
        newErrors.zip = '必須項目です';
      } else if (!/^\d{3}-?\d{4}$/.test(formData.zip)) {
        newErrors.zip = '〒000-0000の形式で入力してください';
      }
      if (!formData.address) newErrors.address = '必須項目です';
      if (!formData.phone) newErrors.phone = '必須項目です';
      
      if (Object.keys(newErrors).length > 0) isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (validateStep(step)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setStep(4); // Success state
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isVisible) return <div ref={formRef} />;

  // Success State
  if (step === 4) {
    return (
      <section ref={formRef} className="py-24 px-6 bg-stone-50 transition-all duration-700 fade-in">
        <div className="max-w-xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-800/10 flex items-center justify-center mb-8">
             <svg className="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
             </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest text-stone-800">
            ご登録ありがとうございます。
          </h2>
          <p className="text-stone-600 leading-loose text-sm font-light">
            確認メールをお送りしました。<br />
            あなたの朝が、より豊かになりますように。
          </p>
          <div className="pt-8">
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} variant="secondary">
              トップに戻る
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={formRef} className="py-24 px-6 bg-stone-50 transition-opacity duration-1000 ease-in-out opacity-100">
      <div className="max-w-2xl mx-auto">
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-16 space-x-4">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif transition-all duration-300
                ${step === s ? 'border border-stone-800 text-stone-800 bg-white' : 
                  step > s ? 'bg-stone-800 text-stone-50 border border-stone-800' : 
                  'border border-stone-200 text-stone-300'}
              `}>
                {step > s ? '✓' : s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-[1px] transition-colors duration-300 ${step > s ? 'bg-stone-800' : 'bg-stone-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg border border-stone-100 shadow-sm transition-all duration-500">
          
          {/* Step 1: Roast Preference */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-light tracking-wide text-stone-700 mb-8 text-center">
                まずは、あなたの好みを<br/>教えてください。
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { id: 'light', label: 'Light Roast', desc: '朝霧のように軽やかな酸味' },
                  { id: 'medium', label: 'Medium Roast', desc: '午後の陽だまりのようなバランス' },
                  { id: 'omakase', label: 'おまかせ', desc: 'ローストマスターが選びます' }
                ].map((option) => (
                  <button 
                    type="button"
                    key={option.id}
                    onClick={() => {
                      setFormData({ ...formData, roast: option.id });
                      setErrors({ ...errors, roast: undefined });
                    }}
                    className={`
                      w-full text-left border rounded-lg p-6 cursor-pointer transition-all duration-300
                      ${formData.roast === option.id 
                        ? 'border-stone-600 bg-stone-50 ring-1 ring-stone-600' 
                        : 'border-stone-200 hover:border-stone-400 hover:shadow-sm'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg tracking-wide text-stone-700 mb-1">{option.label}</h4>
                        <p className="text-xs text-stone-500 font-light">{option.desc}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center`}>
                        {formData.roast === option.id && <div className="w-2 h-2 rounded-full bg-stone-700" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {errors.roast && <p className="text-red-800/70 text-xs text-center mb-4">{errors.roast}</p>}
              
              <div className="text-center">
                <Button onClick={handleNext}>次へ進む</Button>
              </div>
            </div>
          )}

          {/* Step 2: Frequency */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-light tracking-wide text-stone-700 mb-8 text-center">
                どのくらいのペースで<br/>お届けしましょうか。
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { id: 'biweekly', label: '2週間に1回 (200g)', desc: '毎日楽しみたい方へ' },
                  { id: 'monthly-200', label: '月に1回 (200g)', desc: 'ゆっくり味わいたい方へ' },
                  { id: 'monthly-400', label: '月に1回 (400g)', desc: 'ご家族やご友人と' }
                ].map((option) => (
                  <button
                    type="button" 
                    key={option.id}
                    onClick={() => {
                      setFormData({ ...formData, frequency: option.id });
                      setErrors({ ...errors, frequency: undefined });
                    }}
                    className={`
                      w-full text-left border rounded-lg p-6 cursor-pointer transition-all duration-300
                      ${formData.frequency === option.id 
                        ? 'border-stone-600 bg-stone-50 ring-1 ring-stone-600' 
                        : 'border-stone-200 hover:border-stone-400 hover:shadow-sm'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg tracking-wide text-stone-700 mb-1">{option.label}</h4>
                        <p className="text-xs text-stone-500 font-light">{option.desc}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center`}>
                        {formData.frequency === option.id && <div className="w-2 h-2 rounded-full bg-stone-700" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <p className="text-center text-xs text-stone-400 mb-8">いつでもスキップ・変更できます。</p>
              {errors.frequency && <p className="text-red-800/70 text-xs text-center mb-4">{errors.frequency}</p>}

              <div className="flex justify-center gap-4">
                <Button onClick={handleBack} variant="secondary">戻る</Button>
                <Button onClick={handleNext}>次へ進む</Button>
              </div>
            </div>
          )}

          {/* Step 3: Information */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-light tracking-wide text-stone-700 mb-8 text-center">
                最後に、お届け先を<br/>教えてください。
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest text-stone-400 mb-2">お名前 <span className="text-red-800/50">*</span></label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-stone-50 border ${errors.name ? 'border-red-800/30' : 'border-stone-200'} rounded-sm px-4 py-3 text-stone-700 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 font-light transition-colors`}
                    />
                    {errors.name && <p className="text-red-800/60 text-[10px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest text-stone-400 mb-2">メールアドレス <span className="text-red-800/50">*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-stone-50 border ${errors.email ? 'border-red-800/30' : 'border-stone-200'} rounded-sm px-4 py-3 text-stone-700 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 font-light transition-colors`}
                    />
                    {errors.email && <p className="text-red-800/60 text-[10px] mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <label className="block text-xs tracking-widest text-stone-400 mb-2">郵便番号 <span className="text-red-800/50">*</span></label>
                      <input 
                        type="text" 
                        name="zip"
                        placeholder="000-0000"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className={`w-full bg-stone-50 border ${errors.zip ? 'border-red-800/30' : 'border-stone-200'} rounded-sm px-4 py-3 text-stone-700 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 font-light transition-colors`}
                      />
                      {errors.zip && <p className="text-red-800/60 text-[10px] mt-1">{errors.zip}</p>}
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs tracking-widest text-stone-400 mb-2">電話番号 <span className="text-red-800/50">*</span></label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-stone-50 border ${errors.phone ? 'border-red-800/30' : 'border-stone-200'} rounded-sm px-4 py-3 text-stone-700 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 font-light transition-colors`}
                      />
                      {errors.phone && <p className="text-red-800/60 text-[10px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest text-stone-400 mb-2">ご住所 <span className="text-red-800/50">*</span></label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full bg-stone-50 border ${errors.address ? 'border-red-800/30' : 'border-stone-200'} rounded-sm px-4 py-3 text-stone-700 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 font-light transition-colors`}
                    />
                    {errors.address && <p className="text-red-800/60 text-[10px] mt-1">{errors.address}</p>}
                  </div>

                  <div>
                     <label className="block text-xs tracking-widest text-stone-400 mb-2">お届け希望時間帯</label>
                     <div className="relative">
                        <select 
                          name="deliveryTime"
                          value={formData.deliveryTime}
                          onChange={handleInputChange}
                          className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-700 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 font-light appearance-none cursor-pointer"
                        >
                          <option value="">指定なし</option>
                          <option value="am">午前中</option>
                          <option value="14-16">14時 - 16時</option>
                          <option value="16-18">16時 - 18時</option>
                          <option value="18-20">18時 - 20時</option>
                          <option value="19-21">19時 - 21時</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                     </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest text-stone-400 mb-2">備考欄</label>
                    <textarea 
                      name="note"
                      rows={3}
                      placeholder="ご要望があればお聞かせください"
                      value={formData.note}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-700 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 font-light resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6">
                <Button onClick={handleBack} variant="secondary">戻る</Button>
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-stone-700 text-stone-50 text-sm tracking-widest rounded-sm hover:bg-stone-800 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  ) : '定期便を申し込む'}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
