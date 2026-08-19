import Label from "./Label";
import Input from "./Input";
// import '../../styles/App.css'

function PhoneField({
  countryCodeValue,
  countryCodeOnChange,
  phoneNumberValue,
  phoneNumberOnChange,
}) {
  return (
    <>
      <div className="w-full">
        <Label htmlFor="phoneNumber" >No. Hp</Label>
        <div className="flex w-full gap-3 lg:gap-6">
          <div className="country-wrapper bg-primaryBg relative border border-border rounded-md flex items-center min-w-30.5 min-h-12">
            <div className="country relative h-full min-w-11 bg-baseBg border-r border-border py-3 px-2.5">
              <span className="flag-icon absolute"></span>
            </div>

            <select
              className="grow h-full pl-2.5 mr-2 outline-none"
              name="countryCode"
              id="countryCode"
              aria-label="Kode Negara"
              value={countryCodeValue}
              onChange={countryCodeOnChange}
              required
            >
              <option value="+62">+62</option>
              <option value="+60">+60</option>
              <option value="+61">+61</option>
            </select>
          </div>

          <Input
            className="flex-1 border border-border rounded-md py-3 px-2.5 font-sans font-normal text-[0.875rem] leading-[140%] tracking-[0.2px] text-textDark-primary"
            type="tel"
            id="phoneNumber"
            placeholder="812 8888 8888"
            maxLength={12}
            value={phoneNumberValue}
            onChange={phoneNumberOnChange}
            required
          />
        </div>
      </div>
    </>
  );
}

export default PhoneField;
