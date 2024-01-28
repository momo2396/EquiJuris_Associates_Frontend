import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import OutlineButton from "../../../shared/OutlineButton/OutlineButton";
import { FaFileDownload } from "react-icons/fa";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingTop: 432,
    paddingBottom: 144,
    paddingLeft: 96,
    paddingRight: 96,
  },
  section: {
    flexGrow: 1,
  },
});
const PDFFile = ({ description, pdfTitle }) => {
  const PDFFileComp = () => (
    <Document>
      <Page size="C3" style={styles.page} wrap>
        <View style={styles.section}>
          <Text>{description}</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div>
      {/* <input onBlur={(e) => setSearch(e.target.value)} type="text" /> */}
      <PDFDownloadLink document={<PDFFileComp />} fileName={`${pdfTitle}.pdf`}>
        {({ loading }) =>
          loading ? (
            "Loading document..."
          ) : (
            <OutlineButton>
              <FaFileDownload />
            </OutlineButton>
          )
        }
      </PDFDownloadLink>
      <PDFViewer style={{ width: "100%", height: 700, paddingTop: 20 }}>
        <PDFFileComp />
      </PDFViewer>
    </div>
  );
};

export default PDFFile;
