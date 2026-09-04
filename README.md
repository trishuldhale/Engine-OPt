# GEB Smart Engine Dashboard

## What is included
- `index.html` — dashboard UI
- `styles.css` — responsive styling
- `app.js` — vehicle data, recommendation prototype and what-if simulator

## Run
Open `index.html` directly in Chrome/Edge/Firefox. No build step is required.

## Important scientific/data note
The supplied material is a set of screenshots. It visibly contains:
- a two-wheeler master table with 29 vehicles;
- a statement that the experimental dataset contains 326 cleaned records and 18 experimental GEB compositions;
- a demonstrated G70/E10/B20 result at CR 7.5, 5 Nm and 1900 RPM;
- several "top matching experiments" rows at CR 9.70 and 2900/3300 RPM.

The prototype therefore does NOT claim to have trained an ANN from 326 rows. The recommendation/simulation functions are deliberately structured as placeholders.

For the final research-grade system, provide the original CSV/XLSX containing all experimental rows. Then replace `recommend()` / `simulate()` with calls to a trained model/API.

## Recommended production architecture
Frontend:
HTML + CSS + vanilla JS

Backend:
Python FastAPI/Flask

Model:
ANN/XGBoost multi-output regression for BTE, BSFC, CO, HC

Optimizer:
NSGA-II / weighted multi-objective search over feasible G/E/B compositions

Inputs:
compression ratio, torque, RPM, launch year/BS era, company, model, and fuel blend

Outputs:
recommended blend, predicted BTE, BSFC, CO, HC, RON, estimated mileage and confidence/domain warning

## Suggested model validation
Use train/validation/test split or grouped cross-validation. Report MAE, RMSE, R² for every target and keep an out-of-domain warning for inputs outside the experimental envelope.

## Vehicle selection behavior
Selecting a company and model now automatically populates the engine operating-condition fields:
- Compression ratio from the supplied vehicle master table
- Torque default: 6.2 Nm
- RPM default: 3500 RPM
- Launch/emission era inferred from the visible BS classification

The 6.2 Nm / 3500 RPM defaults are UI defaults taken from the latest supplied screen because the screenshots do not provide vehicle-specific torque/RPM values. For the final model, replace these with the actual torque and test RPM associated with each vehicle in the original dataset.
