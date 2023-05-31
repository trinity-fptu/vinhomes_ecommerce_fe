// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

import productImage from "assets/images/banh_bao_chien.jpg";

export default function data() {
    const Product = ({ image, name }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src={image} name={name} size="sm" variant="rounded" />
            <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
                {name}
            </MDTypography>
        </MDBox>
    );

    return {
        columns: [
            { Header: "product", accessor: "product", width: "30%", align: "left" },
            { Header: "price", accessor: "price", align: "left" },
            { Header: "status", accessor: "status", align: "center" },
            { Header: "action", accessor: "action", align: "center" },
        ],
        rows: [
            {
                product: <Product image={productImage} name="banh bao chien" />,
                price: (
                    <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
                        $2,500
                    </MDTypography>
                ),
                status: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        working
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                product: <Product image={productImage} name="banh bao chien" />,
                price: (
                    <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
                        $2,500
                    </MDTypography>
                ),
                status: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        working
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                product: <Product image={productImage} name="banh bao chien" />,
                price: (
                    <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
                        $2,500
                    </MDTypography>
                ),
                status: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        working
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                product: <Product image={productImage} name="banh bao chien" />,
                price: (
                    <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
                        $2,500
                    </MDTypography>
                ),
                status: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        working
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
        ]
    };
}
