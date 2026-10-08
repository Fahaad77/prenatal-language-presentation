const deckMeta = {
  title: "Listening Before Birth",
  subtitle: "Prenatal Linguistic Exposure and Newborn Brain Responses",
  presenter: "Najla Saad Almotiri",
  studentId: "202604229",
  paper: "Rene et al. (2025), Communications Biology, 8, 1155",
  doi: "https://doi.org/10.1038/s42003-025-08594-8",
  license: "Article and original figures: Creative Commons BY-NC-ND 4.0."
};

const references = [
  "Rene, A. et al. (2025). Prenatal linguistic exposure shapes language brain responses at birth. Communications Biology, 8, 1155. https://doi.org/10.1038/s42003-025-08594-8",
  "Graven, S. N. & Browne, J. V. (2008). Auditory development in the fetus and infant. Newborn and Infant Nursing Reviews, 8, 187-193.",
  "Kisilevsky, B. S. et al. (2003). Effects of experience on fetal voice recognition. Psychological Science, 14, 220-224.",
  "Moon, C., Cooper, R. P. & Fifer, W. P. (1993). Two-day-olds prefer their native language. Infant Behavior and Development, 16, 495-500.",
  "Vannasing, P. et al. (2016). Distinct hemispheric specializations for native and non-native languages in one-day-old newborns identified by fNIRS. Neuropsychologia, 84, 63-69.",
  "Partanen, E. et al. (2013). Learning-induced neural plasticity of speech processing before birth. PNAS, 110, 15145-15150.",
  "Mariani, B. et al. (2023). Prenatal experience with language shapes the brain. Science Advances, 9, eadj3524."
];

const slides = [
  {
    section: "Opening",
    type: "content",
    title: "When does the human brain start wiring itself for language?",
    classes: "hook-slide wiring-hook",
    body: `
      <div class="hook-lines">
        <p class="hook-line reveal">When an infant hears their parents speak on day one?</p>
        <p class="hook-line reveal">During their "first week in the crib"?</p>
        <p class="hook-line reveal emphasized">How about weeks before they are even born?</p>
        <p class="hook-final reveal">New neuroimaging reveals that fetal language exposure actually alters neural processing networks in the newborn brain "before life outside the womb even begins".</p>
      </div>
    `,
    notes: {
      time: "30-40 seconds",
      script: "When does the human brain start wiring itself for language? Is it when an infant hears their parents speak on day one? Is it during their first week in the crib? Or could it begin weeks before they are even born? New neuroimaging suggests that fetal language exposure can alter newborn language-processing responses before life outside the womb even begins.",
      point: "Pause after the first two questions. Let the final line land as the transition into the paper."
    }
  },
  {
    section: "Opening",
    type: "content",
    title: "The foundations of language learning may begin before birth",
    classes: "context-slide",
    body: `
      <div class="split calm">
        <div>
          <p class="lead">Research indicates that prenatal experience can support early auditory learning and familiarity with speech.</p>
          <ul class="accent-list">
            <li>The auditory system becomes functional during pregnancy.</li>
            <li>Fetuses encounter filtered speech sounds in the womb.</li>
            <li>Newborn responses can reflect prenatal familiarity.</li>
          </ul>
          <div class="qualification">Auditory familiarity does not establish understanding of words or sentences.</div>
          <p class="source-line"></p>
        </div>
        <figure class="concept-visual">
          <img src="assets/prenatal-visual.png" alt="Watercolor illustration of a pregnant person with gentle sound waves near the abdomen.">
          <figcaption></figcaption>
        </figure>
      </div>
    `,
    notes: {
      time: "45-60 seconds",
      script: "Research suggests that some foundations of language learning emerge before birth. As the auditory system develops, fetuses encounter speech sounds filtered through the maternal body. Previous studies indicate that prenatal experience can influence responses to familiar voices and speech after birth. Here, learning refers to early auditory familiarity. It does not imply that a fetus understands vocabulary or sentences. This distinction leads to the question examined in today's paper: Can controlled prenatal exposure to an unfamiliar language influence newborn brain responses?",
      point: "Point to the qualification box when defining familiarity versus understanding."
    }
  },
  {
    section: "Opening",
    type: "divider",
    title: "Listening Before Birth",
    subtitle: "Prenatal Linguistic Exposure and Newborn Brain Responses",
    body: `
      <div class="title-stack">
        <p class="paper-title">Prenatal linguistic exposure shapes language brain responses at birth</p>
        <p>Rene et al. (2025)<br>Communications Biology, 8, 1155<br><span class="doi">https://doi.org/10.1038/s42003-025-08594-8</span></p>
        <p class="presenter">Najla Saad Almotiri<br><span>Student ID: 202604229</span></p>
      </div>
    `,
    notes: {
      time: "30-40 seconds",
      script: "This question motivated the study by Rene and colleagues, published in Communications Biology in 2025. The researchers investigated whether repeated exposure to a foreign language during late pregnancy was associated with particular patterns of brain response shortly after birth. Today, I will present the study's research design and principal findings, critically evaluate its methodology, and discuss what its results allow us to conclude about prenatal auditory learning.",
      point: "Keep this transition brisk. The title slide establishes the paper and your role."
    }
  },
  {
    section: "Question",
    type: "content",
    title: "Research question and hypotheses",
    body: `
      <div class="question-layout">
        <div class="big-question">Can controlled prenatal speech exposure leave a measurable trace in newborn brain responses?</div>
        <div class="hypothesis-rail">
          <div class="mini-panel reveal">
            <h3>Expected native-language pattern</h3>
            <p>Stronger left temporal responses to French than to an unexposed foreign language.</p>
          </div>
          <div class="mini-panel reveal">
            <h3>Exploratory exposure question</h3>
            <p>Would a briefly exposed foreign language look closer to native speech or to a fully unfamiliar language?</p>
          </div>
          <div class="mini-panel reveal">
            <h3>Boundary condition</h3>
            <p>The outcome concerns auditory brain responses at birth, not vocabulary, comprehension, intelligence, or later language benefits.</p>
          </div>
        </div>
      </div>
      <p class="source-line">Source: Rene et al. (2025), Introduction and Results.</p>
    `,
    notes: {
      time: "45 seconds",
      script: "The central question is whether prenatal linguistic experience changes how newborns' brains respond to speech immediately after birth. The authors expected native French to produce stronger left temporal responses than an unexposed foreign language. They also asked whether a foreign language heard repeatedly before birth would produce a response pattern closer to the native language or closer to a fully unfamiliar language.",
      point: "Use the three panels to separate prediction, exploratory comparison, and limits."
    }
  },
  {
    section: "Design",
    type: "content",
    title: "Participants: one analyzed sample, three recruitment groups",
    body: `
      <div class="chart-and-copy">
        <div class="bar-card" aria-label="Participant count chart">
          <div class="bar-row"><span>No experimental recordings</span><div class="bar-shell"><div class="bar teal" style="--w:35%;">21</div></div></div>
          <div class="bar-row"><span>German prenatal exposure</span><div class="bar-shell"><div class="bar lavender" style="--w:33.33%;">20</div></div></div>
          <div class="bar-row"><span>Hebrew prenatal exposure</span><div class="bar-shell"><div class="bar mint" style="--w:31.67%;">19</div></div></div>
          <div class="total-pill">60 newborns entered analysis</div>
        </div>
        <div class="key-points">
          <ul class="accent-list">
            <li>All families naturally used French in a unilingual family context.</li>
            <li>German versus Hebrew assignment was randomized within the prenatal-exposure sample.</li>
            <li>The no-recordings group was determined by recruitment after 35 weeks of gestational age.</li>
            <li>Seventeen recruited participants were excluded before analysis.</li>
          </ul>
          <p class="source-line">Source: Rene et al. (2025), Materials and Methods; Table 1.</p>
        </div>
      </div>
    `,
    notes: {
      time: "55 seconds",
      script: "The analyzed sample included sixty newborns. Thirty-nine received experimental prenatal recordings: twenty assigned to German and nineteen assigned to Hebrew. Twenty-one received no experimental recordings because they were recruited after thirty-five weeks of gestational age. This matters because only the German versus Hebrew assignment was randomized. The no-recordings group was not randomly assigned; it came from recruitment timing.",
      point: "Point to the group labels before emphasizing that these are recruitment groups, not independent listening-condition totals."
    }
  },
  {
    section: "Design",
    type: "content",
    title: "Prenatal exposure: controlled but brief",
    body: `
      <div class="figure-led">
        <figure class="paper-figure zoomable">
          <img src="assets/study-design.png" alt="Original study design timeline showing recruitment, prenatal exposure, birth, and fNIRS testing 10 to 78 hours after birth.">
          <figcaption></figcaption>
        </figure>
        <div class="callout-grid two">
          <div class="callout reveal"><strong>Start:</strong> 35 weeks gestational age</div>
          <div class="callout reveal"><strong>Session:</strong> 20 minutes</div>
          <div class="callout reveal"><strong>Format:</strong> French plus German or Hebrew story, repeated in alternation</div>
          <div class="callout reveal"><strong>Average exposure:</strong> 25.3 +/- 8.8 sessions</div>
        </div>
      </div>
    `,
    notes: {
      time: "60 seconds",
      script: "For the prenatal-exposure groups, sessions began at thirty-five weeks of gestational age. Each session lasted twenty minutes. The pregnant participant placed headphones on the abdomen and played the same children's story in French and in either German or Hebrew. The design is controlled in the sense that the same story structure was used, but the exposure was still brief and late in pregnancy.",
      point: "Use spotlight mode on the birth marker and the prenatal exposure interval if helpful."
    }
  },
  {
    section: "Design",
    type: "content",
    title: "How listening conditions were defined",
    body: `
      <table class="condition-table">
        <thead>
          <tr>
            <th>Prenatal group</th>
            <th>Native condition</th>
            <th>Exposed condition</th>
            <th>Unexposed condition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>German exposure (n = 20)</td>
            <td>French</td>
            <td>German</td>
            <td>Hebrew</td>
          </tr>
          <tr>
            <td>Hebrew exposure (n = 19)</td>
            <td>French</td>
            <td>Hebrew</td>
            <td>German</td>
          </tr>
          <tr>
            <td>No experimental recordings (n = 21)</td>
            <td>French</td>
            <td>Not applicable</td>
            <td>German and Hebrew</td>
          </tr>
        </tbody>
      </table>
      <div class="warning-note">The listening conditions overlap within newborns. Native n = 60, exposed n = 39, and unexposed n = 60 are condition counts, not independent participant groups to add together.</div>
      <p class="source-line">Source: Rene et al. (2025), Fig. 5 and Statistical analysis.</p>
    `,
    notes: {
      time: "55 seconds",
      script: "The analysis reorganized recordings by language familiarity. French was the native condition for every newborn. For the German-exposure group, German was exposed and Hebrew was unexposed. For the Hebrew-exposure group, Hebrew was exposed and German was unexposed. For the no-recordings group, German and Hebrew were both unexposed. The crucial point is that these conditions overlap within infants, so the condition sample sizes must not be added as if they were separate participants.",
      point: "Trace one row across the table, then explicitly point to the warning note."
    }
  },
  {
    section: "Design",
    type: "content",
    title: "fNIRS: an indirect measure of cortical response",
    body: `
      <div class="fnirs-layout">
        <div class="fnirs-diagram" aria-hidden="true">
          <div class="head-shape">
            <span class="light source"></span>
            <span class="light detector"></span>
            <span class="beam beam-one"></span>
            <span class="beam beam-two"></span>
          </div>
        </div>
        <div>
          <p class="lead">Functional near-infrared spectroscopy estimates changes in blood oxygenation by measuring how near-infrared light is absorbed through the scalp.</p>
          <ul class="accent-list">
            <li>Useful for newborn studies because it is relatively tolerant of movement.</li>
            <li>Rene et al. analyzed oxygenated hemoglobin (HbO) concentration changes.</li>
            <li>The signal is a proxy for cortical activity, not a direct recording of neurons.</li>
          </ul>
        </div>
      </div>
      <p class="source-line">Source: Rene et al. (2025), Introduction and Methods.</p>
    `,
    notes: {
      time: "60 seconds",
      script: "The study used functional near-infrared spectroscopy, or fNIRS. It sends near-infrared light through the scalp and estimates changes in oxygenated and deoxygenated hemoglobin. Because active brain regions change local blood oxygenation, fNIRS provides an indirect measure of cortical response. That indirectness is important: this is not a direct recording of single neurons or thoughts.",
      point: "Point from source to detector on the simple diagram, then to the sentence 'proxy for cortical activity'."
    }
  },
  {
    section: "Design",
    type: "content",
    title: "Postnatal listening task",
    classes: "figure-slide",
    body: `
      <div class="figure-led">
        <figure class="paper-figure zoomable large">
          <img src="assets/fnirs-procedure.png" alt="Original experimental procedure figure showing newborn fNIRS recording, probe placement, and block design for French, German, and Hebrew stories.">
          <figcaption>Original Fig. 2 from Rene et al. (2025), CC BY-NC-ND 4.0.</figcaption>
        </figure>
        <div class="timeline-strip">
          <span>Birth</span>
          <span>10-78 h after birth</span>
          <span>Quiet sleep</span>
          <span>French, German, Hebrew story blocks</span>
        </div>
      </div>
    `,
    notes: {
      time: "55 seconds",
      script: "Testing occurred between ten and seventy-eight hours after birth, with a mean of about thirty hours. Newborns were asleep, and they passively listened to the same story in French, German, and Hebrew. The fNIRS headgear covered bilateral prefrontal, frontal, temporal, posterior temporal, and temporo-parietal regions. The block design let the researchers estimate hemodynamic responses to each language condition.",
      point: "Point to panel B for brain regions and panel C for the block sequence."
    }
  },
  {
    section: "Design",
    type: "content",
    title: "Stimuli and acoustic controls",
    body: `
      <div class="strength-limit acoustic-slide">
        <div>
          <h3>Language contrast</h3>
          <ul>
            <li><strong>French:</strong> native language and syllable-timed.</li>
            <li><strong>German:</strong> foreign, stress-timed, with word-initial stress patterns.</li>
            <li><strong>Hebrew:</strong> foreign, stress-timed, with word-final stress patterns and vowel properties closer to French.</li>
          </ul>
        </div>
        <div>
          <h3>Standardization</h3>
          <ul>
            <li>One multilingual female speaker recorded all story versions.</li>
            <li>The same stimuli were used for prenatal exposure and newborn testing.</li>
            <li>Intensity normalization and fade-in/fade-out were applied to the story blocks.</li>
            <li>Pitch and speaking-rate properties were measured and reported.</li>
          </ul>
        </div>
      </div>
      <p class="source-line">Source: Rene et al. (2025), Stimuli and Table 2.</p>
    `,
    notes: {
      time: "45-55 seconds",
      script: "The language choices were designed to separate familiarity from language-specific acoustics as much as possible. French was the native language, while German and Hebrew were both foreign but differed in rhythm and phonological properties. All versions of the story were recorded by the same multilingual female speaker, and the authors measured acoustic properties such as pitch and speaking rate. This does not remove every possible language difference, but it makes the comparison more controlled.",
      point: "Use the left column for the language contrast and the right column for controls."
    }
  },
  {
    section: "Design",
    type: "content",
    title: "Preprocessing and statistical model",
    body: `
      <div class="control-grid stats-slide">
        <div class="control-item reveal"><span>Signal cleanup</span><p>Visual inspection, motion-artifact correction with targeted PCA and PARAFAC, and trial rejection when movement was excessive.</p></div>
        <div class="control-item reveal"><span>Filtering and conversion</span><p>Low-pass filtering at 0.2 Hz, then conversion from optical density to HbO and HbR using the modified Beer-Lambert law.</p></div>
        <div class="control-item reveal"><span>Main signal</span><p>Task-evoked oxygenated hemoglobin (HbO) concentration changes were modeled with a GLM and averaged by ROI.</p></div>
        <div class="control-item reveal"><span>ANOVA</span><p>Condition, ROI, and hemisphere produced a significant three-way interaction: F = 2.617, p = .007.</p></div>
      </div>
      <div class="warning-note">About 20% of trials were rejected for excessive movement; post hoc tests used Bonferroni correction.</div>
      <p class="source-line">Source: Rene et al. (2025), Preprocessing and Statistical analysis.</p>
    `,
    notes: {
      time: "60 seconds",
      script: "The fNIRS data required several preprocessing steps. The authors inspected signal quality, corrected motion artifacts where possible, rejected trials with excessive movement, filtered high-frequency physiological noise, and converted optical density into hemoglobin concentration changes. The main statistical test was a repeated-measures ANOVA using region and hemisphere as within-subject factors, with condition as the exposure factor. The important global result was a significant condition by region by hemisphere interaction.",
      point: "Reveal the four blocks in order: cleanup, conversion, signal, ANOVA."
    }
  },
  {
    section: "Results",
    type: "content",
    title: "Brain maps and time courses",
    classes: "figure-slide",
    body: `
      <figure class="paper-figure zoomable full-figure">
        <img src="assets/brain-maps-timecourses.png" alt="Original regional brain maps and hemodynamic response time courses for native, exposed, and unexposed conditions.">
        <figcaption>Original Fig. 3 from Rene et al. (2025), CC BY-NC-ND 4.0. Asterisks mark native versus unexposed differences.</figcaption>
      </figure>
      <p class="figure-note">Native and exposed conditions show positive left temporal responses; the unexposed condition differs in the regions marked by the paper.</p>
    `,
    notes: {
      time: "70 seconds",
      script: "This figure shows the regional maps and time courses. The paper reports increases in oxygenated hemoglobin in the left temporal region for native and exposed conditions. In the right hemisphere, the prefrontal region showed a decrease for native and exposed conditions, while the unexposed condition did not show the same pattern. The asterisks identify the statistically significant native-versus-unexposed differences.",
      point: "Use figure enlargement if presenting from a small screen. Point first to the left temporal map, then to the time-course asterisks."
    }
  },
  {
    section: "Results",
    type: "content",
    title: "Two native-versus-unexposed differences were significant",
    body: `
      <div class="results-grid">
        <div class="means-chart" aria-label="Means chart for significant native versus unexposed comparisons">
          <div class="mean-row">
            <span>Left temporal</span>
            <div class="mean-axis">
              <i class="zero"></i>
              <b class="mean native" style="--x:67%; --err:11%;">Native +0.034</b>
              <b class="mean unexposed" style="--x:40%; --err:11%;">Unexposed -0.010</b>
            </div>
            <em>p = .018</em>
          </div>
          <div class="mean-row">
            <span>Right prefrontal</span>
            <div class="mean-axis">
              <i class="zero"></i>
              <b class="mean native" style="--x:25%; --err:10%;">Native -0.038</b>
              <b class="mean unexposed" style="--x:43%; --err:11%;">Unexposed -0.004</b>
            </div>
            <em>p = .045</em>
          </div>
          <p>Dots show reported means; horizontal lines approximate +/- SE.</p>
        </div>
        <div class="comparison-table">
          <table>
            <thead><tr><th>Comparison</th><th>Result</th><th>Interpretation</th></tr></thead>
            <tbody>
              <tr><td>Native vs. unexposed</td><td class="sig">Significant in two ROIs</td><td>Evidence for differentiated responses</td></tr>
              <tr><td>Native vs. exposed</td><td>Not significant</td><td>Does not prove equivalence</td></tr>
              <tr><td>Exposed vs. unexposed</td><td>Not significant</td><td>Uncertainty remains for the direct exposure effect</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="source-line">Source: Rene et al. (2025), Results; reported means are HbO concentration changes in uM.</p>
    `,
    notes: {
      time: "75 seconds",
      script: "The strongest statistical evidence is here. Native speech differed from unexposed foreign speech in the left temporal region, with native at plus point zero three four micromolar and unexposed at minus point zero one zero, p equals point zero one eight. It also differed in the right prefrontal region, with native at minus point zero three eight and unexposed at minus point zero zero four, p equals point zero four five. But native-versus-exposed and exposed-versus-unexposed comparisons were not significant, so we should avoid saying the exposed language became equivalent to the native language.",
      point: "Point to the p values, then to the nonsignificant rows in the table."
    }
  },
  {
    section: "Results",
    type: "content",
    title: "Original box-plot results",
    classes: "figure-slide",
    body: `
      <figure class="paper-figure zoomable full-figure">
        <img src="assets/boxplot-results.png" alt="Original box plot results for HbO concentration changes across exposure conditions, hemispheres, and regions.">
        <figcaption>Original Fig. 4 from Rene et al. (2025), CC BY-NC-ND 4.0. Black arrows indicate significant native versus unexposed post hoc differences.</figcaption>
      </figure>
      <p class="figure-note">The original distributions make the uncertainty visible: many individual points overlap across conditions.</p>
    `,
    notes: {
      time: "65 seconds",
      script: "The box plots are important because they show the individual variability. The significant native-versus-unexposed effects appear in the left temporal and right prefrontal regions, but the individual data points overlap considerably. This is why the presentation should treat the result as evidence for selective differences, not as a simple separation between all conditions.",
      point: "Use the spotlight around the left temporal bracket first, then the right prefrontal bracket."
    }
  },
  {
    section: "Results",
    type: "content",
    title: "Hemispheric comparisons: left-greater-than-right in selected regions",
    body: `
      <div class="hemi-layout">
        <div class="hemi-card reveal">
          <h3>Native</h3>
          <p>Left greater than right in temporo-parietal, prefrontal, and posterior frontal regions.</p>
        </div>
        <div class="hemi-card reveal">
          <h3>Exposed</h3>
          <p>Left greater than right in posterior temporal, temporo-parietal, and posterior frontal regions.</p>
        </div>
        <div class="hemi-card reveal muted">
          <h3>Unexposed</h3>
          <p>No significant hemispheric difference.</p>
        </div>
      </div>
      <div class="interpretation-band">These lateralization results support familiarity-sensitive hemispheric patterns, but they do not show semantic understanding.</div>
      <p class="source-line">Source: Rene et al. (2025), Results and Fig. 4 caption.</p>
    `,
    notes: {
      time: "55 seconds",
      script: "The authors also examined hemispheric differences. The native condition showed left-greater-than-right responses in selected temporo-parietal, prefrontal, and posterior frontal regions. The exposed condition also showed left-greater-than-right responses, but in a partly different set of regions. The unexposed condition did not show a significant hemispheric difference. This supports a familiarity-sensitive pattern, while still staying at the level of auditory processing.",
      point: "Reveal each condition one by one to keep the comparison clear."
    }
  },
  {
    section: "Results",
    type: "content",
    title: "The direct exposure comparison remains uncertain",
    body: `
      <div class="uncertainty-layout">
        <div class="large-ns">Exposed vs. unexposed<br><span>not significant</span></div>
        <div class="explain-stack">
          <div class="mini-panel reveal">
            <h3>What can be said</h3>
            <p>The exposed condition often looked closer to native than to unexposed in the authors' descriptive interpretation.</p>
          </div>
          <div class="mini-panel reveal">
            <h3>What cannot be said</h3>
            <p>A nonsignificant result does not establish that two conditions are equivalent.</p>
          </div>
          <div class="mini-panel reveal">
            <h3>Dose question</h3>
            <p>No significant correlation with amount of exposure was found; this does not define a threshold.</p>
          </div>
        </div>
      </div>
    `,
    notes: {
      time: "60 seconds",
      script: "This is the critical interpretation slide. The paper's broader interpretation is that prenatal exposure can influence speech processing at birth. However, the direct exposed-versus-unexposed comparison was not significant. Therefore, we should not say the exposed foreign language was definitively processed like French, and we should not say it was proven different from the fully unexposed foreign language. The dose-response analysis also found no significant correlations, but that does not tell us the exposure threshold.",
      point: "Emphasize 'uncertain' and pause on 'does not establish equivalence'."
    }
  },
  {
    section: "Evaluation",
    type: "content",
    title: "Control analyses and design safeguards",
    body: `
      <div class="control-grid">
        <div class="control-item reveal"><span>Speaker control</span><p>One multilingual female speaker recorded all three story versions.</p></div>
        <div class="control-item reveal"><span>Language counterbalancing</span><p>French, German, and Hebrew block order was randomized and counterbalanced.</p></div>
        <div class="control-item reveal"><span>Native subgroup check</span><p>French responses did not significantly differ between families with and without experimental French exposure.</p></div>
        <div class="control-item reveal"><span>Exposure-only analysis</span><p>Restricting analysis to prenatal-exposure participants followed the same pattern.</p></div>
      </div>
      <p class="source-line">Source: Rene et al. (2025), Methods and Discussion limitations.</p>
    `,
    notes: {
      time: "55 seconds",
      script: "Several choices strengthened the design. The same multilingual speaker recorded the three language versions, reducing speaker confounds. Language blocks were counterbalanced. The authors also checked whether French responses differed between participants who did and did not receive experimental French recordings, and they report no significant difference. They also repeated the main analysis only in participants who received prenatal exposure, and the pattern remained similar.",
      point: "Use this slide to show that critique does not mean dismissing the study; it means locating the strength of the evidence."
    }
  },
  {
    section: "Evaluation",
    type: "content",
    title: "Strengths and limitations",
    body: `
      <div class="strength-limit">
        <div>
          <h3>Strengths</h3>
          <ul>
            <li>Controlled late-gestation exposure to native and foreign speech.</li>
            <li>Newborn testing within 10-78 hours after birth.</li>
            <li>Within-newborn listening to French, German, and Hebrew.</li>
            <li>Original fNIRS evidence across multiple fronto-temporal regions.</li>
          </ul>
        </div>
        <div>
          <h3>Limitations</h3>
          <ul>
            <li>Modest sample size, especially for exposed comparisons.</li>
            <li>No-recordings group was not randomized.</li>
            <li>Foreign-language specific comparisons were underpowered.</li>
            <li>Results do not demonstrate vocabulary learning, comprehension, intelligence, or later benefits.</li>
          </ul>
        </div>
      </div>
    `,
    notes: {
      time: "70 seconds",
      script: "The study is strong because it combines controlled prenatal exposure with very early postnatal brain measurement. It also avoids relying only on parental language environment by using a structured story exposure protocol. At the same time, the sample is modest, the no-recordings group was not randomized, and the exposed condition had fewer observations than native and unexposed conditions. Most importantly, the findings are about early auditory brain responses. They do not show vocabulary learning, comprehension, improved intelligence, or later language benefits.",
      point: "Balance the two columns. End on the final limitation to prevent overclaiming."
    }
  },
  {
    section: "Conclusion",
    type: "content",
    title: "Conclusion: a measurable trace, not a complete language outcome",
    body: `
      <div class="conclusion-layout">
        <div class="takeaway">
          <span>Main takeaway</span>
          <p>Late prenatal linguistic experience can be associated with selective differences in newborn speech-related brain responses.</p>
        </div>
        <div class="takeaway secondary">
          <span>Careful interpretation</span>
          <p>The strongest statistical evidence is native versus unexposed speech in the left temporal and right prefrontal regions.</p>
        </div>
        <div class="discussion-question">Discussion: How long do these early response patterns last without later exposure, and what kind of follow-up study could test that ethically?</div>
      </div>
    `,
    notes: {
      time: "60 seconds",
      script: "My conclusion is that the study provides evidence for a measurable trace of prenatal linguistic experience at birth. But it is not evidence that fetuses understand language, and it is not evidence for long-term developmental advantage. The strongest result is selective: native speech differed from unexposed foreign speech in two regions. A useful next question is how long these early response patterns last if the child receives no later exposure, and what kind of follow-up study could test that ethically.",
      point: "End by inviting the discussion question. Give the audience a few seconds before moving to references."
    }
  },
  {
    section: "References",
    type: "content",
    title: "References and figure attribution",
    body: `
      <div class="references-list">
        ${references.map((item) => `<p>${item}</p>`).join("")}
      </div>
      <div class="license-box">Figures from Rene et al. (2025) are used unchanged under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International. Provide attribution and do not distribute adapted versions without permission.</div>
    `,
    notes: {
      time: "20 seconds",
      script: "These are the references used for the review, with Rene and colleagues as the central paper. The original figures are attributed to the article and should be shared only in ways consistent with the BY-NC-ND license.",
      point: "No detailed narration is needed unless the audience asks about sources."
    }
  },
];
