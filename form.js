document.addEventListener("DOMContentLoaded", function () {
    const phoneInputs = document.querySelectorAll("._phone");
    const countryInputs = document.querySelectorAll('[name="country"]');
    const langInputs = document.querySelectorAll('[name="lang"]');
    const timezoneInputs = document.querySelectorAll('[name="timezone"]');
    const DATE = new Date();
    const TIMEZONE_OFFSET = DATE.getTimezoneOffset() / 60;
    const TIMEZONE =
        Math.sign(TIMEZONE_OFFSET) == -1
            ? TIMEZONE_OFFSET.toString().replace("-", "")
            : "-" + TIMEZONE_OFFSET;
    const DEFAULT_CODE = "ID";
    const DEFAULT_LANG = "id"; // Убедитесь, что здесь используются 2 символа
    const LANG = (navigator.language || DEFAULT_LANG).substring(0, 2).toUpperCase(); // Извлекаем первые 2 символа и приводим к верхнему регистру
    const LANG_TEST = getLangTest(DEFAULT_LANG);

    setLangValue(langInputs, LANG);
    setTimezoneValue(timezoneInputs, TIMEZONE);
    initPhoneInputs(phoneInputs, countryInputs);

    document.querySelectorAll("._form").forEach((form) => {
        form.addEventListener("submit", FormSend);
    });

    document.querySelectorAll("._req").forEach((input) => {
        input.addEventListener("focus", inputRemoveError);
    });

    document.querySelectorAll("._check").forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                formRemoveError(event.currentTarget);
            }
        });
    });

    function getLangTest(lang) {
        const TESTS_LIST = {
                    'en': /^([a-zA-Z-]{2,}(?: {1,2}[a-zA-Z-]+){0,2})$/,
                    'it': /^([a-zA-ZÀàÈèÉéÌìÍíÎîÒòÓóÙù-]{2,}(?: {1,2}[a-zA-ZÀàÈèÉéÌìÍíÎîÒòÓóÙù-]+){0,2})$/,
                    'fr': /^([a-zA-ZÀàÂâÄäÆæÇçÉéÈèÊêËëÎîÏïÔôŒœÙùÛûÜü-]{2,}(?: {1,2}[a-zA-ZÀàÂâÄäÆæÇçÉéÈèÊêËëÎîÏïÔôŒœÙùÛûÜü-]+){0,2})$/,
                    'de': /^([a-zA-ZÄäÖöÜüẞß-]{2,}(?: {1,2}[a-zA-ZÄäÖöÜüẞß-]+){0,2})$/,
                    'sv': /^([a-zA-ZÆæØøÅåÄäÖöŠšŽž-]{2,}(?: {1,2}[a-zA-ZÆæØøÅåÄäÖöŠšŽž-]+){0,2})$/,
                    'da': /^([a-zA-ZÆæØøÅåÄäÖöŠšŽž-]{2,}(?: {1,2}[a-zA-ZÆæØøÅåÄäÖöŠšŽž-]+){0,2})$/,
                    'nb': /^([a-zA-ZÆæØøÅåÄäÖöŠšŽž-]{2,}(?: {1,2}[a-zA-ZÆæØøÅåÄäÖöŠšŽž-]+){0,2})$/,
                    'nn': /^([a-zA-ZÆæØøÅåÄäÖöŠšŽž-]{2,}(?: {1,2}[a-zA-ZÆæØøÅåÄäÖöŠšŽž-]+){0,2})$/,
                    'is': /^([a-zA-ZÆæØøÅåÄäÖöŠšŽž-]{2,}(?: {1,2}[a-zA-ZÆæØøÅåÄäÖöŠšŽž-]+){0,2})$/,
                    'fo': /^([a-zA-ZÆæØøÅåÄäÖöŠšŽž-]{2,}(?: {1,2}[a-zA-ZÆæØøÅåÄäÖöŠšŽž-]+){0,2})$/,
                    'fi': /^([a-zA-ZÆæØøÅåÄäÖöŠšŽž-]{2,}(?: {1,2}[a-zA-ZÆæØøÅåÄäÖöŠšŽž-]+){0,2})$/,
                    'ru': /^([a-zA-Z-]{2,}(?: {1,2}[a-zA-Z-]+){0,2}|[а-яА-яё-]{2,}(?: {1,2}[а-яА-яё-]+){0,2})$/,
                    'bg': /^([a-zA-Z-]{2,}(?: {1,2}[a-zA-Z-]+){0,2}|[а-яА-яё-]{2,}(?: {1,2}[а-яА-яё-]+){0,2})$/,
                    'es': /^([a-zA-ZÁáÂâÃãÀàÇçÉéÊêÍíÑñÓóÔôÕõÚúü-]{2,}(?: {1,2}[a-zA-ZÁáÂâÃãÀàÇçÉéÊêÍíÑñÓóÔôÕõÚúü-]+){0,2})$/,
                    'pt': /^([a-zA-ZÁáÂâÃãÀàÇçÉéÊêÍíÑñÓóÔôÕõÚúü-]{2,}(?: {1,2}[a-zA-ZÁáÂâÃãÀàÇçÉéÊêÍíÑñÓóÔôÕõÚúü-]+){0,2})$/,
                    'cz': /^([a-zA-ZÁáČčĎďÉĚéěÍíŇňÓóŘŠŤřšťÚŮúůÝŽýž-]{2,}(?: {1,2}[a-zA-ZÁáČčĎďÉĚéěÍíŇňÓóŘŠŤřšťÚŮúůÝŽýž-]+){0,2})$/,
                    'ro': /^([a-zA-ZĂăÂâÎîȘșȚț-]{2,}(?: {1,2}[a-zA-ZĂăÂâÎîȘșȚț-]+){0,2})$/,
                    'hu': /^([a-zA-ZÁáÉéÍíÓóÖöŐőÚúÜü-]{2,}(?: {1,2}[a-zA-ZÁáÉéÍíÓóÖöŐőÚúÜü-]+){0,2})$/,
                    'hr': /^([a-zA-ZČčĆćÐđŠšŽž-]{2,}(?: {1,2}[a-zA-ZČčĆćÐđŠšŽž-]+){0,2})$/,
                    'tr': /^([a-zA-ZÇçĞğİıÖöŞşÜü-]{2,}(?: {1,2}[a-zA-ZÇçĞğİıÖöŞşÜü-]+){0,2})$/,
                    'sk': /^([a-zA-ZÁáÄäČčĎďžÉéÍíĹĺĽľŇňÓóÔôŔŕŠšŤťÚúÝýŽž-]{2,}(?: {1,2}[a-zA-ZÁáÄäČčĎďžÉéÍíĹĺĽľŇňÓóÔôŔŕŠšŤťÚúÝýŽž-]+){0,2})$/,
                    'sr': /^([a-zA-ZĐđŽžĆćČčŠš-]{2,}(?: {1,2}[a-zA-ZĐđŽžĆćČčŠš-]+){0,2}|[а-яА-яёЂђJjЉљЊњЋћЏџ-]{2,}(?: {1,2}[а-яА-яёЂђJjЉљЊњЋћЏџ-]+){0,2})$/,
                    'ar': /^([a-zA-Z-]{2,}(?: {1,2}[a-zA-Z-]+){0,8}|[\u0621-\u064A]{2,}(?: {1,2}[\u0621-\u064A]+){0,8})$/,
                    'ja': /^([a-zA-Z-]{2,}(?: {1,2}[a-zA-Z-]+){0,2}|[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}々〆〤ー\s]{2,}(?: {1,2}[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}々〆〤ー\s]+){0,2})$/u,
                    'pl': /^([a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż-]{2,}(?: {1,2}[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż-]+){0,2})$/,
                    'id': /^([a-zA-ZÀàÈèÉéÌìÍíÎîÒòÓóÙù-]{2,}(?: {1,2}[a-zA-ZÀàÈèÉéÌìÍíÎîÒòÓóÙù-]+){0,2})$/,
                    'rs': /^([a-zA-ZĐđŽžĆćČčŠš-]{2,}(?: {1,2}[a-zA-ZĐđŽžĆćČčŠš-]+){0,2}|[а-яА-яёЂђJjЉљЊњЋћЏџ-]{2,}(?: {1,2}[а-яА-яёЂђJjЉљЊњЋћЏџ-]+){0,2})$/
        };
        return TESTS_LIST[lang] || TESTS_LIST[DEFAULT_LANG];
    }

    function initPhoneInputs(phoneInputs, countryInputs) {
        phoneInputs.forEach((input) => {
            window.intlTelInput(input, {
                dropdownContainer: document.body,
                initialCountry: "auto",
                nationalMode: 1,
                autoPlaceholder: "aggressive",
                allowDropdown: 1,
                formatOnDisplay: 1,
                separateDialCode: 1,
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
                geoIpLookup: async (callback) => {
                    const API_KEY = "0c92588331bf449e9f3d3a3d6469e1d4";
                    const API_URL = "https://api.ipgeolocation.io/ipgeo";

                    try {
                        const response = await fetch(`${API_URL}?apiKey=${API_KEY}`, {
                            cache: "reload",
                        });
                        if (!response.ok) {
                            throw Error(`Failed: ${response.statusText}`);
                        }
                        const data = await response.json();
                        const code = data.country_code2;
                        setCountryValue(countryInputs, code);
                        callback(code);
                    } catch (error) {
                        setCountryValue(countryInputs, DEFAULT_CODE);
                        callback(DEFAULT_CODE);
                    }
                },
            });
        });
    }

  async function FormSend(e) {
    e.preventDefault();
    let leadForm = this;
    let error = FormValidate(leadForm);
    let formData = new FormData(leadForm);
    let phoneInput = document.querySelector("#" + leadForm.id + " ._phone");
    let sbmtBtn = document.querySelector("#" + leadForm.id + " ._btn");
    let iti = window.intlTelInputGlobals.getInstance(phoneInput);
    let fullPhone = iti.getNumber();
    let countryData = iti.getSelectedCountryData();
    let dialCode = countryData.dialCode;
    formData.append("fullPhone", fullPhone);
    formData.append("code", dialCode);

    // Проверяем и добавляем все скрытые поля в FormData
    document.querySelectorAll('input[type="hidden"]').forEach(input => {
        formData.append(input.name, input.value);
    });

    if (error === 0) {
        sbmtBtn.disabled = true;
        let autologinUrl = '';
        let pixel = '';
        let redirectUrl = '';

        try {
            let response = await fetch("api.php", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                let responseData = await response.json();
                autologinUrl = responseData.autologinUrl || '';
                pixel = responseData.pixel || '';
                redirectUrl = responseData.redirect_url || '';
                leadForm.reset();
            }
        } finally {
            sbmtBtn.disabled = false;
            window.location.href = `success.php?autologinUrl=${encodeURIComponent(autologinUrl)}&pixel=${encodeURIComponent(pixel)}&redirect_url=${encodeURIComponent(redirectUrl)}`;
        }
    }
}
    function FormValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll("._req");
        formReq.forEach((input) => {
            formRemoveError(input);
            if (input.classList.contains("_name") && nameTest(input)) {
                formAddError(input);
                error++;
            } else if (input.classList.contains("_email") && emailTest(input)) {
                formAddError(input);
                error++;
            } else if (input.classList.contains("_phone") && phoneTest(input)) {
                formAddError(input);
                error++;
            } else if (input.classList.contains("_check") && !input.checked) {
                formAddError(input);
                error++;
            }
        });
        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
        input.labels.forEach(label => label.classList.add('_error'));
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
        input.labels.forEach(label => label.classList.remove('_error'));
    }

    function inputRemoveError(e) {
        this.classList.remove("_error");
    }

    function setLangValue(langInputs, lang) {
        langInputs.forEach(input => input.value = lang);
    }

    function setCountryValue(countryInputs, countryCode) {
        countryInputs.forEach(input => input.value = countryCode);
    }

    function setTimezoneValue(timezoneInputs, timezone) {
        timezoneInputs.forEach(input => input.value = timezone);
    }

    function nameTest(input) {
        return !LANG_TEST.test(input.value.trim());
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value.trim());
    }

    function phoneTest(input) {
        return !window.intlTelInputGlobals.getInstance(input).isValidNumber();
    }
});
